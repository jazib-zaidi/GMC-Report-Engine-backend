const mongoose = require('mongoose');

const GoogleProductCategorySchema = new mongoose.Schema(
  {
    merchantId: { type: String, required: true },
    offerId: { type: String, required: true },
    id: { type: String, required: true },
    categoryL1: { type: String, default: '' },
    categoryL2: { type: String, default: '' },
    categoryL3: { type: String, default: '' },
    categoryL4: { type: String, default: '' },
    categoryL5: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  'GoogleProductCategory',
  GoogleProductCategorySchema
);
