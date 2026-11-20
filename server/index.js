const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Service = require('./models/Service');
const { services } = require('./data/seedData');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Seed services on startup if collection is empty
const seedServices = async () => {
  try {
    const count = await Service.countDocuments();
    if (count === 0) {
      await Service.insertMany(services);
      console.log('Services seeded successfully');
    }
  } catch (error) {
    console.error('Error seeding services:', error.message);
  }
};
seedServices();

// Routes
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/careers', require('./routes/careerRoutes'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Adimire API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
