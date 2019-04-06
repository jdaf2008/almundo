'use strict'

require('dotenv').load();
var mongoose = require('mongoose');
var app = require('./app');

let urlBD = process.env.URLBD || "mongodb://localhost:27017/almundo_backend"
let port = process.env.PORT || 3789;

const options = {
    useNewUrlParser: true
  };

console.log("somethinggg happendddd");


mongoose.connect(urlBD, options)
    .then(() => {
        console.log('the almundo Database connection is successfull');
        
        app.listen(port, ()=>{
            console.log("The local server with node and express works fine")
        });
    })
    .catch(err => console.log(err));
