const express = require('express');
const router = express.Router();
const Machine = require('../models/Machine');
const verifyAdmin = require('../middleware/verifyAdmin'); // Middleware to verify admin

// Route to create a new machine (admin only)
router.post('/', verifyAdmin, async (req, res) => {
    try {
        const { name, location, costPerMonth, description } = req.body;

        // Check if all fields are provided and costPerMonth is a number
        if (!name || !location || !costPerMonth) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (isNaN(costPerMonth) || costPerMonth <= 0) {
            return res.status(400).json({ message: 'Invalid costPerMonth' });
        }

        // Create new machine
        const newMachine = new Machine({
            name,
            location,
            costPerMonth,
            description
        });

        // Save machine to DB
        const savedMachine = await newMachine.save();
        res.status(201).json(savedMachine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get all machines (for users to browse) with optional filtering by location
router.get('/', async (req, res) => {
    try {
        const { location } = req.query;

        const query = location ? { location } : {}; // Filter by location if provided
        const machines = await Machine.find(query);

        if (!machines.length) {
            return res.status(404).json({ message: 'No machines found' });
        }

        res.status(200).json(machines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get machine details by ID
router.get('/:id', async (req, res) => {
    try {
        const machine = await Machine.findById(req.params.id);
        if (!machine) {
            return res.status(404).json({ message: 'Machine not found' });
        }
        res.status(200).json(machine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to update machine details (admin only)
router.put('/:id', verifyAdmin, async (req, res) => {
    try {
        const { name, location, costPerMonth, description } = req.body;

        if (costPerMonth && (isNaN(costPerMonth) || costPerMonth <= 0)) {
            return res.status(400).json({ message: 'Invalid costPerMonth' });
        }

        // Update machine
        const updatedMachine = await Machine.findByIdAndUpdate(
            req.params.id,
            { name, location, costPerMonth, description },
            { new: true }
        );

        if (!updatedMachine) {
            return res.status(404).json({ message: 'Machine not found' });
        }

        res.status(200).json(updatedMachine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to delete a machine (admin only)
router.delete('/:id', verifyAdmin, async (req, res) => {
    try {
        const deletedMachine = await Machine.findByIdAndDelete(req.params.id);
        if (!deletedMachine) {
            return res.status(404).json({ message: 'Machine not found' });
        }
        res.status(200).json({ message: 'Machine deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
