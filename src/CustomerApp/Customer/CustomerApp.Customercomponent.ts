import { Component } from '@angular/core';
import { Customer } from "./CustomerApp.model"
@Component({
  
  templateUrl: './CustomerApp.Customerview.html'
  
})
export class CustomerComponenet {
  title = 'customerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();
  
  Add()
  {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel=new Customer();//Clear UI
  }

  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.CustomerModel.formCustomerGroup
    .contains[controlname]
    .hasError(typeofvalidator);
  }
}


