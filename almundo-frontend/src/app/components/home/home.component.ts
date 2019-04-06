import { Component } from "@angular/core";

@Component({
    selector: "home",
    // moduleId: module.id,
    templateUrl: "./home.component.html"
})

export class HomeComponent {

    title: string;

    nameHotel: string;

    constructor(){
        this.title = "almundo.com";
    }


}