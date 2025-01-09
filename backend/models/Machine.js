const mongoose = require('mongoose');

const MachineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  availability: { type: Boolean, default: true },
});

module.exports = mongoose.model('Machine', MachineSchema);
