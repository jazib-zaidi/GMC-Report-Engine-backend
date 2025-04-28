const multer = require('multer');
const path = require('path');
const XLSX = require('xlsx'); // Add this line
const { getProductCategory } = require('../utils/getProductCategory');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only .xlsx files are allowed!'));
    }
  },
});

exports.uploadMiddleware = upload.single('file');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

exports.uploadXlsxFile = async (req, res) => {
  const { tokens } = req.token;
  const gmcAccountId = 238564716;

  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    let i = 0;

    for (const product of data) {
      i += 1;
      const itemId = product['Item ID'];
      try {
        const res = await getProductCategory(gmcAccountId, itemId);
        console.log(i, res.categoryL1);
        product['Google Product Category 1'] = res.categoryL1 || 'Empty';
        product['Google Product Category 2'] = res.categoryL2 || 'Empty';
        product['Google Product Category 3'] = res.categoryL3 || 'Empty';
        product['Google Product Category 4'] = res.categoryL4 || 'Empty';
        product['Google Product Category 5'] = res.categoryL5 || 'Empty';
      } catch (err) {
        console.error(
          `Error fetching category for Item ID ${itemId}:`,
          err.message
        );
        product['Google Product Category'] = 'Error';
      }
    }

    const newWorksheet = XLSX.utils.json_to_sheet(data);
    workbook.Sheets[sheetName] = newWorksheet;

    const updatedFilePath = path.join(
      'uploads',
      `${Date.now()}-updated-${req.file.originalname}`
    );
    XLSX.writeFile(workbook, updatedFilePath);

    res.json({ message: 'File Uploaded', data, updatedFilePath });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'File upload failed' });
  }
};
