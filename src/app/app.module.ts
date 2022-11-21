import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
        AppComponent,
        PropertyCardComponent,
        PropertyListComponent,
      NavBarComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule

    ],
    // CUSTOM_ELEMENTS_SCHEMA:["app-nav-bar","app-property-card",'app-property-list']
})
export class AppModule { }
