// controllers/cardStatus.controller.js

const CardStatus = require('../models/cardStatus.model');

const getCardStatus = async (req, res) => {
    const { phone, card_id } = req.query;

    if (!phone && !card_id) {
        return res.status(400).json({ error: 'Phone number or card ID is required.' });
    }

    let query = {};
    if (phone) {
        query = { user_contact: phone };
    } else {
        query = { card_id: card_id };
    }

    try {
        const entries = await CardStatus.find(query).select('comment source_file').exec();
        if (entries.length === 0) {
            return res.status(404).json({ error: 'Entries not found.' });
        }
       
        const updatedEntries = entries.map(entry => ({
            ...entry._doc,
            comment: entry.comment === 'Comment not available' ? 'status not available...' : entry.comment
        }));
        res.json({ entries: updatedEntries });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = { getCardStatus };
