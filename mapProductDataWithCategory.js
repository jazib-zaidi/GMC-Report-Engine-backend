require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const { Parser } = require('json2csv');
const OUTPUT_CSV = 'mapped_products.csv';
// 👇 Replace with the actual path to your model
const GoogleProductCategory = require('./models/GoogleProductCategory');

const INPUT_CSV = 'products.csv';
// must include id
async function loadCsv(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}
const mongoURI =
  'mongodb+srv://jazib:lErsVQiCpmh9UoEb@GMC-report.lnh9lfy.mongodb.net/GMC-report?retryWrites=true&w=majority&appName=GMC-Report';

(async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Optional: test fetching 1 record to ensure the model is working
    const test = await GoogleProductCategory.findOne();
    console.log('Sample category record:', test);
    const products = await loadCsv(INPUT_CSV);
    const offerIds = products.map((p) => p['Item ID']).filter(Boolean);
    const categoryDocs = await GoogleProductCategory.find({
      offerId: { $in: offerIds },
    }).lean(); // lean gives plain JS objects
    console.log(
      `🔎 Found ${categoryDocs.length} matching categories from MongoDB`
    );
    const categoryMap = {};
    for (const doc of categoryDocs) {
      categoryMap[doc.offerId] = doc;
    }

    const merged = products.map((product) => {
      const offerId = product['Item ID'];
      const cat = categoryMap[offerId] || {};

      const categoryParts = [
        cat.categoryL1,
        cat.categoryL2,
        cat.categoryL3,
        cat.categoryL4,
        cat.categoryL5,
      ].filter((part) => part && part.trim().toLowerCase() !== 'empty');
      console.log(categoryParts);
      const categoryPath = categoryParts.join(' > ');

      return {
        ...product,
        categoryPath: categoryPath || '',
      };
    });

    const fields = Object.keys(merged[0]); // include all fields dynamically
    const parser = new Parser({ fields });
    const csvData = parser.parse(merged);

    fs.writeFileSync(OUTPUT_CSV, csvData);
    console.log(`✅ Mapped data written to ${OUTPUT_CSV}`);

    console.log('🧩 Merged sample:', merged.slice(0, 3)); // show first few
    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err);
    mongoose.connection.close();
  }
})();

// 👇 Adjust the path/filename to match your actual CSV
