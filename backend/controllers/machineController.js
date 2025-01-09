const Machine = require('../models/Machine');  // Adjust the path as needed

// Add a new machine (only for admin)
const addMachine = async (req, res) => {
  const { name, location, monthlyCost } = req.body;

  try {
    const newMachine = new Machine({ name, location, monthlyCost });
    await newMachine.save();
    res.status(201).json({ message: "Machine added successfully", machine: newMachine });
  } catch (error) {
    res.status(500).json({ message: "Error adding machine" });
  }
};

// Get all available machines
const getAllMachines = async (req, res) => {
  try {
    const machines = await Machine.find();
    res.status(200).json(machines);
  } catch (error) {
    res.status(500).json({ message: "Error fetching machines" });
  }
};

// Get machine by ID
const getMachineById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const machine = await Machine.findById(id);
    if (!machine) return res.status(404).json({ message: "Machine not found" });
    res.status(200).json(machine);
  } catch (error) {
    res.status(500).json({ message: "Error fetching machine" });
  }
};

module.exports = { addMachine, getAllMachines, getMachineById };
