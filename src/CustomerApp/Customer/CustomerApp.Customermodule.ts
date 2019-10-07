import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import { CustomerComponenet } from './CustomerApp.Customercomponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';

@NgModule({
  declarations: [
    CustomerComponenet,
      
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponenet]
})
export class CustomerModule { }
