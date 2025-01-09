const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Machine = require('../models/Machine');
const verifyUser = require('../middleware/verifyUser'); // Middleware to verify users
const verifyAdmin = require('../middleware/verifyAdmin'); // Middleware to verify admins

// Route to book a machine
router.post('/', verifyUser, async (req, res) => {
    try {
        const { machineId, date, userId } = req.body;
        
        // Validate input
        if (!machineId || !date) {
            return res.status(400).json({ message: 'Machine ID and date are required' });
        }

        // Check if machine exists
        const machine = await Machine.findById(machineId);
        if (!machine) {
            return res.status(404).json({ message: 'Machine not found' });
        }

        // Create a new booking
        const newBooking = new Booking({
            machineId,
            date,
            userId
        });

        // Save booking to DB
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get all bookings for a specific user
router.get('/user/:userId', verifyUser, async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.userId });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get all bookings (admin only)
router.get('/', verifyAdmin, async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to cancel a booking (user)
router.delete('/:id', verifyUser, async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        if (booking.userId.toString() !== req.userId) {
            return res.status(403).json({ message: 'You can only cancel your own bookings' });
        }

        // Delete booking
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Booking canceled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
