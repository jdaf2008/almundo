import { Component, OnInit} from "@angular/core";
import { Config } from "../../shared/config";
import { Controller } from "../../shared/controller";

import { Hotel } from "../../shared/models/hotel"


@Component({
    selector: "filter",
    // moduleId: module.id,
    templateUrl: "./filter.component.html",
    styleUrls: ['./filter.component.css']
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
    stars: Array<boolean> = new Array(6);
    starList: Array<number> = [];

    
    constructor(
        private controller: Controller,
    ){
        this.title = "Filtros";
        this.nameFilterTitle = "Nombre del Hotel";
        this.startsFilterTitle = "Estrellas";
        this.title = "almundo.com";
        this.stars.fill(false);
        this.stars[0]=true;
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
                    item.stars,
                    item.price,
                    item.image,
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
         this.checkStars();
       this.getData(this.createCondition());

    }

    clearData(){

        this.hotelList = [];
    }

    createCondition(){
       var condition = {name:null,stars:null};

       console.log("Stas Hotel " + this.starsHotel);

       this.nameHotel == "" || this.nameHotel == undefined ? delete condition.name : condition.name = this.nameHotel;
       this.starList == undefined ||  this.starList.length == 0 ? delete condition.stars : condition.stars = this.starList;

       return condition;
    }

    checkStars() {

        console.log("chech stars  ");

        if (this.stars[0]) {
            this.starList = [];

        } else {
            this.starList = [];
            for (var i=1; i < this.stars.length; i++){
                console.log("insede for");
             this.stars[i] ? this.starList.push(i) : null
            }
        } 

        console.log("  arrays 1 " + this.stars + " array 2 to send  " + this.starList);


    }



}
