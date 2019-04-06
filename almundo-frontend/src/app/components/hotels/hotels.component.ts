import { Component, OnInit } from "@angular/core";

@Component({
    selector: "hotels",
    // moduleId: module.id,
    templateUrl: "./hotels.component.html"
})

export class HotelsComponent implements OnInit {

    title: string;

    constructor(){
        this.title = "almundo.com"
    }
    ngOnInit(){
        console.log("NgOnInit in hotels component");
    }
}