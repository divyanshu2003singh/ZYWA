const csv = require('csv-parser');
const fs = require('fs');
const CardStatus = require('../models/cardStatus.model');

async function loadData() {
  const files = ['Sample Card Status Info - Pickup.csv', 'Sample Card Status Info - Delivery exceptions.csv', 'Sample Card Status Info - Delivered.csv', 'Sample Card Status Info - Returned.csv'];

  try {
    for (const file of files) {
      const fileEntries = await parseCsvFile(file);
      console.log(`Data loaded from ${file}`);
      await insertEntries(fileEntries);
    }

    console.log('Data loaded successfully');
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

async function parseCsvFile(file) {
  return new Promise((resolve, reject) => {
    const entries = [];
    fs.createReadStream(`data/${file}`)
      .pipe(csv())
      .on('data', (row) => {
        const entry = {
          ID: row['ID '] || row['ID'],
          card_id: row['Card ID'],
          user_contact: row['User contact'] || row['User Mobile'] || row['User contact'] || row['User Contact'],
          timestamp: row.Timestamp,
          comment: row.Comment || "Comment not available",
          source_file: file,
        };
        entries.push(entry);
      })
      .on('end', () => {
        resolve(entries);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

async function insertEntries(entries) {
  try {
    await CardStatus.insertMany(entries);
  } catch (error) {
    console.error('Error inserting entries:', error);
  }
}

module.exports = { loadData };
