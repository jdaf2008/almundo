'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = Schema({
    name: String,
    starts: Number,
    price: Number ,
    image: String,
    amenities: Array
})

module.exports = mongoose.model("Hotel", HotelSchema);