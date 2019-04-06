'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HotelSchema = Schema({
    id: String,
    name: String,
    starts: Number,
    price: Number ,
    image: String,
    amenities: Array
})

module.exports = mongoose.model("Hotel", HotelSchema);