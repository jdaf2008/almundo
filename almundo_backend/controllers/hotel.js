'use strict'

// Models

var Hotel = require('../models/hotel');
var Controller = require('../shared/controller');
var Config = require("../shared/config.json");



function saveHotels(req,res){
    console.log("Save hotels");

       // Create hotel object
       var hotel = new Hotel();

       // get requested parameters
       var params =  req.body;

       console.log(params);
   
       // Assign value to hotel
       if(params.name){

           hotel.id = params.id;name
           hotel.name = params.name;
           hotel.price = params.price;
           hotel.starts = params.starts;
           hotel.image = params.image;
           hotel.amenities = params.amenities;




           Controller.handleResponse('save', {id:hotel.id}, null, hotel, null, Hotel, Config.DATA_SAVE_MSG_ERROR, Config.ERROR_DATA, Config.DATA_SAVE_MSG_OK, (code, payload)=>{
               res.status(code).send(payload);
           });
   
       } else {
           res.status(404).send({message:Config.ERROR_DATA});
       } 
}

function getHotels(req, res){


        console.log("get hotel");

        req.query.stars ? req.query.stars = parseInt(req.query.stars) : null;

        Controller.handleResponse("get", req.query, null, null, null, Hotel, Config.DATA_GET_MSG_ERROR, null, Config.DATA_GET_MSG_OK, (code, payload)=>{
            res.status(code).send(payload);
        });
    
}


function updateHotel(req,res){
    var parameterId = req.params.id
    var update = req.body;

    Controller.handleResponse("update", null, update, null, parameterId, Hotel, Config.DATA_UPDATE_MSG_ERROR, null, Config.DATA_UPDATE_MSG_OK, (code, payload)=>{
        res.status(code).send(payload);
    });
}

function deleteHotel(req,res){
    var parameterId = req.params.id;
    // Temporal
    res.status(405).send({mesagge:"method not allowed"});

    // Controller.handleResponse("delete", null, null, null, parameterId, City, Config.DATA_DELETE_MSG_ERROR, null, Config.DATA_DELETE_MSG_ERROR, (code, payload)=>{
    //     res.status(code).send(payload);
    // });
}



module.exports = {
    getHotels,
    saveHotels,
    updateHotel,
    deleteHotel
};