// corsMiddleware.js
const cors = require('cors');

// Configure CORS middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the origin of your frontend application
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (cookies, authorization headers)
  optionsSuccessStatus: 204, // Respond with 204 (No Content) for preflight requests
};

// Use the configured CORS middleware
const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
