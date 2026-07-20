import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { UsersComponent } from "./component/users/users.component";
import { ProductsComponent } from "./component/products/products.component";
import { FairsComponent } from "./component/fairs/fairs.component";
import { ProductsDashbordComponent } from "./component/products/products-dashbord/products-dashbord.component";
import { ProductsFormComponent } from "./component/products/products-form/products-form.component";
import { UserFormComponent } from "./component/users/user-form/user-form.component";
import { UserDashbordComponent } from "./component/users/user-dashbord/user-dashbord.component";
import { FairsDashbordComponent } from "./component/fairs/fairs-dashbord/fairs-dashbord.component";
import { FairsDetailsComponent } from "./component/fairs/fairs-details/fairs-details.component";
import { AuthComponent } from "./component/auth/auth.component";

//base_Url == http://locolhost:4200/
const routes: Routes = [

{
    path :'', //http://locolhost:4200/home
   component:AuthComponent
},
{
    path: 'home',//http://locolhost:4200/
    component : HomeComponent
},
{
    path:'users', //base_Url/users
    component:UserDashbordComponent,
    children:[
        {
            path:'adduser',
            component:UserFormComponent
        },
        {
            path:':id',
            component:UsersComponent
        },
        {
            path:':id/edit',
            component:UserFormComponent
        }
    ]
},
{
    path:'products',//base_Url/productas
    component:ProductsDashbordComponent,
    children:[
        {
    path:'addproduct',//base_Url/productas/addproduct
    component:ProductsFormComponent
},
{
    path:':id',//base_Url/productas/addproduct
    component:ProductsComponent
},
{
    path:':id/edit',//base_Url/productas
    component:ProductsFormComponent
},
    ]
},

{
    path :'fairs',//base_Url/fairs
    component:FairsDashbordComponent,
    children:[
        {
            path:':id',
            component:FairsDetailsComponent
        }
    ]
}


]


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{

}