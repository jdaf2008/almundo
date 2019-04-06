import { Component } from "@angular/core";

@Component({
    selector: "hotels",
    // moduleId: module.id,
    templateUrl: "./hotels.component.html"
})

export class HotelsComponent {

    title: string;

    constructor(){
        this.title = "almundo.com"
    }
}