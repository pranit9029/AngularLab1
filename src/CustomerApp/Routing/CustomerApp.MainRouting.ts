import { HomeComponent } from '../Home/CustomerApp.Homecomponent'


export const MainRoutes=[
    {path: 'Home', component : HomeComponent},
    {path: 'Customer', 
    loadChildren : '../Customer/CustomerApp.Customermodule#CustomerModule'},
    {path: 'Supplier', 
    loadChildren : '../Supplier/CustomerApp.Suppliermodule#SupplierModule'},
    {path: '', component : HomeComponent},
];