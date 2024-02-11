const connectToMongoose = require('./db');
const express = require('express');

const cors = require('cors');
const app = express();
const port = 5000;

// Connect to MongoDB
connectToMongoose();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
// Apply CORS middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Available routes
app.use('/api/auth', require('./routes/auth'));
// app.use("/api/users", require('./routes/users'));
// app.use("/api/password-reset",require('./routes/passwordReset'));
// Start the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
