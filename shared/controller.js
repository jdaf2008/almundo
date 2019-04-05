'use strict'

var Config = require("./config.json");

function basicResponse(err, items, errorMsg, successMsg, cbResponse){

    if(err){
        cbResponse(500, {
            data:"",
            message: Config.ERROR_MSG
        });
    } else {
        if(!items){
            cbResponse(404, {
                data: "",
                message: errorMsg
            });
        } else {
            cbResponse(200, {
                items,
                //message: successMsg
            });
        }
    }

}


function handleResponse(method, condition, items, item, itemId, Model, errorBasicMsg, errorSecondMsg, successBasicMsg, cbResponse){

    switch (method){
        case "save":
            Model.findOne(condition, (err,issetItem)=>{
                if(err){
                    cbResponse(500, {
                        data: "",
                        message: errorSecondMsg
                    });
                } else {
                    if(!issetItem){
                        item.save((err, itemStored) => {
                            basicResponse(err, itemStored, errorBasicMsg, successBasicMsg, cbResponse);
                        });
                    } else {
                        cbResponse(404, {
                            data: "",
                            message: errorSecondMsg
                        });
                    }
                }
            
            
            });
            break;
        case "get":
            Model.find({}).exec((err, items) => {
                basicResponse(err, items, errorBasicMsg, successBasicMsg, cbResponse);
            });
            
            break;
        case "update":
            Model.findByIdAndUpdate(itemId, items, {new:true}, (err, parameterUpdated)=>{
                basicResponse(err, parameterUpdated, errorBasicMsg, successBasicMsg, cbResponse);
            });
            break;
        case "delete":
        
            Model.findByIdAndDelete(itemId, (err, parameterDeleted)=>{
                basicResponse(err, parameterDeleted, errorBasicMsg, successBasicMsg, cbResponse);
            });
            break;
        default:
    }

}

module.exports = {
    basicResponse,
    handleResponse
};