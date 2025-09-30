require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const { Parser } = require('json2csv');

// 👇 Replace with the actual path to your model
const GoogleProductCategory = require('./models/GoogleProductCategory');

const OUTPUT_CSV = 'mapped_products.csv';

// Prefer env var; falls back to hardcoded string if present
const mongoURI =
  process.env.MONGO_URI ||
  'mongodb+srv://jazib:lErsVQiCpmh9UoEb@GMC-report.lnh9lfy.mongodb.net/GMC-report?retryWrites=true&w=majority&appName=GMC-Report';

(async () => {
  try {
    // 1) Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // 2) Fetch category docs (adjust the filter if you need a subset)
    const categoryDocs = await GoogleProductCategory.find({
      merchantId: 8535782,
    }).lean();

    console.log(`🔎 Loaded ${categoryDocs.length} docs`);
    console.log(categoryDocs);
    // 3) Build report rows straight from Mongo
    const rows = categoryDocs.map((doc) => {
      const parts = [
        doc.categoryL1,
        doc.categoryL2,
        doc.categoryL3,
        doc.categoryL4,
        doc.categoryL5,
      ].filter((p) => p && String(p).trim().toLowerCase() !== 'empty');

      const categoryPath = parts.join(' > ');

      // Return whatever fields you want in your report:
      return {
        offerId: doc.offerId || '',
        // Include raw levels if useful:
        categoryL1: doc.categoryL1 || '',
        categoryL2: doc.categoryL2 || '',
        categoryL3: doc.categoryL3 || '',
        categoryL4: doc.categoryL4 || '',
        categoryL5: doc.categoryL5 || '',
        // Nice combined path:
        categoryPath,
        // Add other fields from your schema as needed:
        // title: doc.title || '',
        // merchantId: doc.merchantId || '',
        // updatedAt: doc.updatedAt || '',
      };
    });

    if (rows.length === 0) {
      console.log('⚠️ No documents found to write.');
      await mongoose.connection.close();
      process.exit(0);
    }

    // 4) Write CSV
    const fields = Object.keys(rows[0]);
    const parser = new Parser({ fields });
    const csvData = parser.parse(rows);

    fs.writeFileSync(OUTPUT_CSV, csvData);
    console.log(`✅ Report written to ${OUTPUT_CSV}`);
    console.log('🧩 Sample rows:', rows.slice(0, 3));

    await mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error:', err);
    try {
      await mongoose.connection.close();
    } catch {}
    process.exit(1);
  }
})();
