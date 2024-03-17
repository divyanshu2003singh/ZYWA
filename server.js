// server.js

const express = require('express');
const connectDB = require('./config/db.config');
const { loadData } = require('./config/loadData'); // Import loadData function
const cardStatusRoutes = require('./routes/cardStatusRoutes');

const app = express();
const port = 3000;


connectDB();




app.use(express.json());


app.use('/', cardStatusRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    // Load data when the server starts
    loadData(); // Call loadData function
  });