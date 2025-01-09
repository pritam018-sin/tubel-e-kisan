const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  machineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Machine', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Booking', BookingSchema);
