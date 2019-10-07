import{NgForm,FormGroup,FormControl,Validator,FormBuilder, Validators} from '@angular/forms'


export class Customer{
    CustomerCode:string="";
    CustomerName:string="";
    CustomerAmount:number=0;
    formCustomerGroup: FormGroup = null;// Create object of FormGroup
    constructor(){
        
        var _builder=new FormBuilder();
        this.formCustomerGroup = _builder.group({}); //use the builder to create

        this.formCustomerGroup.
        addControl("CustomerControl",
        new FormControl('',Validators.required)
        );

        var validationCollection=[];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$"))

        
        this.formCustomerGroup.
        addControl("CustomerCodeControl",
        new FormControl('',Validators.compose(validationCollection))
        );
    }
}

//Create : We Create the validation object model
//Connect : we connect the UI
//Check : isvalid,isDirty