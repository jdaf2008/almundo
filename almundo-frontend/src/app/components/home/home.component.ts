import { Component, OnInit } from "@angular/core";
import { Config } from "../../shared/config";
import { Controller } from "../../shared/controller";

import { Hotel } from "../../shared/models/hotel"


@Component({
    selector: "home",
    // moduleId: module.id,
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {

    title: string;

    nameHotel: string;

    //View Objetcs

    hotelList: Array<Hotel> = [];

    constructor(
        private controller: Controller,
    ){
        this.title = "almundo.com";
    }


    ngOnInit(){

        console.log("OnInit Home Component");
        this.getData();

    }
      // ******************************* General Methods ************************************

    // Function, Get data from API services and set local variables
    getData() {
        this.controller.generalService(Config.NAME_SERVICE_GET_PARAMETERS, null, (res) => {
            console.log("get data correct");
            alert(Config.GENERAL_OK_MESSAGE)
            console.log("Items "+ JSON.stringify(res.items));

            res.items.forEach((item)=>{
                this.hotelList.push(new Hotel(
                    item.id,
                    item.name,
                    item.starts,
                    item.price,
                    item.images
                ));
            });

        }, (error) => {
            alert(Config.GENERAL_ERROR_MESSAGE);
            
        });
    }



}