const connectToMongoose = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Connect to MongoDB
connectToMongoose();
app.use(express.json());
// Apply CORS middleware
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// Parse JSON requests
app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));

// Start the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
