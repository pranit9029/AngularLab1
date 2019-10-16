import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { HomeComponent } from './CustomerApp.Homecomponent';
import { MasterPageComponenet } from './CustomerApp.MasterPagecomponent';
import { DBLogger, BaseLogger, ConsoleLogger, FileLogger } from '../Utility/CustomerAppLogger';

var ProvidersColl:any=[];
//
ProvidersColl.push({provide:"1",useClass:DBLogger}); 
ProvidersColl.push({provide:"2",useClass:ConsoleLogger});
ProvidersColl.push({provide:BaseLogger,useClass:ConsoleLogger});

@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponenet
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [ProvidersColl],
  bootstrap: [MasterPageComponenet]
})
export class MainModule { }
