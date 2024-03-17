// models/cardStatus.model.js

const mongoose = require('mongoose');

const cardStatusSchema = new mongoose.Schema({
    ID: String,
    card_id: String,
    user_contact: String,
    timestamp: String,
    comment: String,
    source_file: String,
});

const CardStatus = mongoose.model('CardStatus', cardStatusSchema);

module.exports = CardStatus;
