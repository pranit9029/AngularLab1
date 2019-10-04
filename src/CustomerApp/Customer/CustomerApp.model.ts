import{NgForm,FormGroup,FormControl,Validator,FormBuilder, Validators} from '@angular/forms'


export class Customer{
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;
    formCustomerGroup: FormGroup = null;// Create object of FormGroup
    constructor(){
        var _builder=new FormBuilder();
        this.formCustomerGroup = _builder.group({}); //use the builder to create

        this.formCustomerGroup.addControl("CustomerNameControl",
                                            new FormControl('',Validators.required)
        );
    }
}

//Create : We Create the validation object model
//Connect : we connect the UI
//Check : isvalid,isDirty