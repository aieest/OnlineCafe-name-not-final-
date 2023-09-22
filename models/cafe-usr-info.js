const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usrInfoSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    contactNo: {
        type: Number,
        require: false
    },
    email: {
        type: String,
        require: false
    }
}, {timestamps: true});

const usrAuther = mongoose.model('usrAuther', usrInfoSchema);
module.exports = usrAuther;