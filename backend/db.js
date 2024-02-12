const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/loginSystem";

const connectToMongoose = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {

        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongoose;
