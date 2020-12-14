import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './add-property/add-property.component';
import { RentPropertyComponent } from './rent-property/rent-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      ProductCardComponent,
      ProductListComponent,
      AddPropertyComponent,
      RentPropertyComponent,
      PropertyDetailComponent,
      UserRegisterComponent,
      UserLoginComponent
   
   ],
   imports: [



   BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule ,
      BsDropdownModule.forRoot()
   ],
   providers: [
      HousingService,
      UserServiceService,
      AlertifyService,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
