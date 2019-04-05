'use strict'

var express = require('express');
var HotelController = require('../controllers/hotel');
var mdAuthPublic = require('../middlewares/authPublic');

var api = express.Router();

api.get('/hotels', HotelController.getHotels);
api.post('/hotels', HotelController.saveHotels);
api.put('/hotels/:id', HotelController.updateHotel);
api.delete('/hotels/:id', HotelController.deleteHotel);

module.exports = api;
