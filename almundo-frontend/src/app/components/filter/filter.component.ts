import { Component, OnInit } from "@angular/core";

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

    constructor(){
        this.title = "Filtros"
        this.nameFilterTitle = "Nombre del Hotel"
        this.startsFilterTitle = "Estrellas"    
    }

    ngOnInit(){
        console.log("NgOnInit in hotels component");
    }


}