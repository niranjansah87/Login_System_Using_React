const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const Users=new Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Contact:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    },

    }
);
