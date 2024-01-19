const connectToMongoose = require('./db');
const express= require('express');
connectToMongoose();


// Use cors middleware
app.use(corsMiddleware);

const app = express();
const cors = require('cors');
const port=5000;
app.listen(port,(error)=>{
    if (!error) {
        console.log(`Server is running at port ${port}`);
        
    }
    else{
        console.log("Error occured while listening on port ${port",error);
    }
});
app.get('/', (req, res) => {
    res.send('Hello World!')
  })