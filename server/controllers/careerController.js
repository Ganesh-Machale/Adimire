const Career = require('../models/Career');

// @desc    Get all active job listings
// @route   GET /api/careers
const getCareers = async (req, res) => {
  try {
    const careers = await Career.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(careers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Submit a job application
// @route   POST /api/careers/apply
const applyForJob = async (req, res) => {
  try {
    const { name, email, phone, position, coverLetter } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    // In a real app, you'd save this to an Application model and handle file uploads.
    // For now, return a success response.
    res.status(201).json({
      success: true,
      message: 'Your application has been submitted successfully!',
      data: { name, email, phone, position, coverLetter },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getCareers, applyForJob };
