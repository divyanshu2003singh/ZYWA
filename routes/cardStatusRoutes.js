// routes/cardStatusRoutes.js

const express = require('express');
const router = express.Router();
const cardStatusController = require('../controllers/cardStatusController');

router.get('/get_card_status', cardStatusController.getCardStatus);

module.exports = router;
