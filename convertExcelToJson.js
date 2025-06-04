const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Get Excel file path from command line argument
const filePath = process.argv[2];

if (!filePath || !filePath.endsWith('.xlsx')) {
  console.error(
    '❌ Please provide a valid path to an .xlsx file.\nUsage: node convertExcelToJson.js /path/to/file.xlsx'
  );
  process.exit(1);
}

try {
  // Read the Excel file
  const workbook = xlsx.readFile(filePath);

  // Convert all sheets to JSON
  const result = {};
  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    result[sheetName] = xlsx.utils.sheet_to_json(sheet);
  });

  // Output file name
  const outputFileName = path.basename(filePath, '.xlsx') + '.json';

  // Write JSON to file
  fs.writeFileSync(outputFileName, JSON.stringify(result, null, 2));
  // console.log(`✅ Converted and saved to ${outputFileName}`);
} catch (err) {
  console.error('❌ Error reading or converting the Excel file:', err.message);
}

// node convertExcelToJson.js data.xlsx
