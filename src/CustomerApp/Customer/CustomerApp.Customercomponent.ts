import { Component,Injector } from '@angular/core';
import { Customer } from "./CustomerApp.model";
import {Ilogger, BaseLogger} from '../Utility/CustomerAppLogger'

@Component({
  
  templateUrl: './CustomerApp.Customerview.html'
  
})
export class CustomerComponenet {
  title = 'customerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();  
  
  LogObj:BaseLogger=null;

  constructor(_injector :Injector){
    this.LogObj=_injector.get("1");
    this.LogObj.Log();    
  }
 
  SelectCustomer(_selected:Customer){
    this.CustomerModel=_selected;
  }

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


