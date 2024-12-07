const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');

//const authMiddleware = require('../middleware/authMiddleware');


router.get('/', (req, res) => {
    res.send('Admin routes are working!');
  });
router.post('/addTrain', apiKeyMiddleware.verifyApiKey, adminController.addTrain);
router.put('/update-seats/:trainId', apiKeyMiddleware.verifyApiKey, adminController.updateTrainSeats);

module.exports = router;
