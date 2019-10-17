import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import { CustomerComponenet } from './CustomerApp.Customercomponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { GridComponent } from "../Utility/CustomerApp.Grid.Component"
@NgModule({
  declarations: [
    CustomerComponenet,
    GridComponent
      
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule
  ],
  providers: [
  
],
  bootstrap: [CustomerComponenet]
})
export class CustomerModule { }
