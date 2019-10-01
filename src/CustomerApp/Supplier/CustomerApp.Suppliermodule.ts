import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import { SupplierComponenet } from './CustomerApp.Suppliercomponent';

@NgModule({
  declarations: [
    
    SupplierComponenet
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponenet]
})
export class SupplierModule { }
