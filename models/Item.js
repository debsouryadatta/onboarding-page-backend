const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    text:String,
    logo:String
},{ collection: 'item' })

module.exports = mongoose.model('Item', ItemSchema);