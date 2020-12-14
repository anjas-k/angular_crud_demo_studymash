import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RentPropertyComponent } from './rent-property/rent-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';



const routes: Routes = [
  {
    path:"addproperty",component: AddPropertyComponent},
    {
      path:"",component:ProductListComponent
    },
    {
      path:"rentproperty",component:ProductListComponent
    },
    {
      path:"propertydetail/:id",component:PropertyDetailComponent
    },
  
    {
      path:"user/login",component:UserLoginComponent
    },
    {
      path:"user/register",component:UserRegisterComponent

    },
    {
      path:"**",component:ProductListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
