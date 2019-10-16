import { Component } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerAppLogger';

@Component({
  
  templateUrl: './CustomerApp.Supplierview.html'
  
})
export class SupplierComponenet {
  LogObj:BaseLogger=null;

  constructor(_logger :BaseLogger){
    this.LogObj=_logger;
    this.LogObj.Log();    
  }
}


