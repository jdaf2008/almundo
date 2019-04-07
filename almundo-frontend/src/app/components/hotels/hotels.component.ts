import { Component, OnInit, Input } from "@angular/core";
import { Hotel } from 'src/app/shared/models/hotel';

@Component({
    selector: "hotels",
    // moduleId: module.id,
    templateUrl: "./hotels.component.html"
})

export class HotelsComponent implements OnInit {

    title: string;
    @Input() hotels: Hotel;

    constructor(){
        this.title = "almundo.com"
    }
    ngOnInit(){
        console.log("NgOnInit in hotels component");
    }
}