const connectToMongoose = require('./db');
const express = require('express');
const cors = require('cors'); // Import cors

const corsMiddleware = require('./middleware/corsMiddleware'); // Import your custom corsMiddleware

const app = express();
const port = 5000;

// Use cors middleware
app.use(corsMiddleware);

// Other middleware and routes go here

// app.use('/login', require('./routes/auth'))
// app.use('/signup', require('./routes/auth'))


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log(`Error occurred while listening on port ${port}`, error);
  }
});
