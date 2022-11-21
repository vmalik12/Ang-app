import { Component } from "@angular/core";

@Component({
  selector: "app-property-card",
  templateUrl: 'property-card.component.html',

  styleUrls: ["property-card.component.css"]

  // styles:['h1{font-weight:normal;colour:red;}']

}
)

export class PropertyCardComponent {

  Property: any ={
    "id":1,
    "Type":"House",
    "Name":"Tom"
   }

}
