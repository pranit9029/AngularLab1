import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { HomeComponent } from './CustomerApp.Homecomponent';
import { MasterPageComponenet } from './CustomerApp.MasterPagecomponent';

@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponenet   
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponenet]
})
export class MainModule { }
