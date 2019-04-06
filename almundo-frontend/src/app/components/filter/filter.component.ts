import { Component } from "@angular/core";

@Component({
    selector: "filter",
    // moduleId: module.id,
    templateUrl: "./filter.component.html"
})

export class FilterComponent {

    title: string;

    constructor(){
        this.title = "almundo.com"
    }
}