import { Component, OnInit } from "@angular/core";
import { Config } from "../../shared/config";
import { Controller } from "../../shared/controller";

import { Hotel } from "../../shared/models/hotel"


@Component({
    selector: "filter",
    // moduleId: module.id,
    templateUrl: "./filter.component.html"
})

export class FilterComponent implements OnInit{

    title: string;
    nameFilterTitle: string;
    startsFilterTitle: string;

    //Attribute to look for
    nameHotel: string;
    starsHotel: number;

    //View Objetcs

    hotelList: Array<Hotel> = [];

   
    constructor(
        private controller: Controller,
    ){
        this.title = "Filtros";
        this.nameFilterTitle = "Nombre del Hotel";
        this.startsFilterTitle = "Estrellas";
        this.title = "almundo.com";;
    }


    ngOnInit(){

        console.log("OnInit filter Component");
        this.getData(null);

    }
      // ******************************* General Methods ************************************

    getData(condition) {
        this.controller.generalService(Config.NAME_SERVICE_GET_PARAMETERS, condition, (res) => {
            console.log("get data correct");
            alert(Config.GENERAL_OK_MESSAGE);
            this.clearData();
            res.items.forEach((item)=>{
                this.hotelList.push(new Hotel(
                    item.id,
                    item.name,
                    item.starts,
                    item.price,
                    item.images,
                    item.amenities
                ));
            });

            console.log("get data " + JSON.stringify(this.hotelList));

        }, (error) => {
            alert(Config.GENERAL_ERROR_MESSAGE);
            
        });
    }


    lookFor(){

        console.log("Click on look for");
        this.getData(this.createCondition());

    }

    clearData(){

        this.hotelList = [];
    }

    createCondition(){
       var condition = { name:this.nameHotel, stars:this.starsHotel};
       return condition;
    }



}
