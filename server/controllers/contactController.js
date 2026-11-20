const ContactMessage = require('../models/ContactMessage');

// @desc    Submit a contact form message
// @route   POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    const contactMessage = await ContactMessage.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: contactMessage,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { submitContact };
