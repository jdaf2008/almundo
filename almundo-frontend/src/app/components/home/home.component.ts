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

    }



}