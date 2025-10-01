const mongoose = require('mongoose');

const reportConfigSchema = new mongoose.Schema(
  {
    customer_id: { type: String, required: true, index: true },
    sheet_id: { type: String, required: true },
    time_frame: { type: Number, default: 90 },
    limit: { type: Number, default: 50 },
    refresh_token: { type: String, required: true },
    account_name: { type: String }, // optional: friendly label
    status: { type: String, default: 'active' }, // active/paused
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model('ReportConfig', reportConfigSchema);
