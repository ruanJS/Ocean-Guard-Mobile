const express = require('express');
const router = express.Router();
const observationController = require('../controllers/observationController');
const verifyToken = require('../middleware/verifyToken');

router.post('/add', verifyToken, observationController.addObservation);
router.get('/', verifyToken, observationController.getObservations);

module.exports = router;
