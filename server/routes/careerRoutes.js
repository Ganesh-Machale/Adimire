const express = require('express');
const router = express.Router();
const { getCareers, applyForJob } = require('../controllers/careerController');

router.get('/', getCareers);
router.post('/apply', applyForJob);

module.exports = router;
