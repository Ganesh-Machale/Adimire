const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
const getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get single service by ID
// @route   GET /api/services/:id
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getServices, getServiceById };
