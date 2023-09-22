const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menu = new Schema ({
    name: {
        type: String,
        require: true
    },
    category: {
        type: [String],
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, {timestamps: true});

const menuList = mongoose.model('menuList', menu);
module.exports = menuList;