const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/";
const dbName = 'loginSystem'


const connectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI,{ useNewUrlParser: true },(err,client)=>{
            if(err)
            {
                console.log("Error connecting to MongoDB: ",err.message);
            }
            db=client.db(dbName);
            console.log(`Connected MongoDB: ${url}`)
            console.log(`Database: ${dbName}`)
        } )
        
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error.message);
        
    }
}
module.exports = connectToMongo;



