import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { ProductsComponent } from './component/products/products.component';
import { FairsComponent } from './component/fairs/fairs.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsDashbordComponent } from './component/products/products-dashbord/products-dashbord.component';
import { ProductsFormComponent } from './component/products/products-form/products-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GetconfirmationComponent } from './component/getconfirmation/getconfirmation.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDashbordComponent } from './component/users/user-dashbord/user-dashbord.component';
import { UserFormComponent } from './component/users/user-form/user-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { FairsDashbordComponent } from './component/fairs/fairs-dashbord/fairs-dashbord.component';
import { FairsDetailsComponent } from './component/fairs/fairs-details/fairs-details.component';
import { AuthComponent } from './component/auth/auth.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    NavbarComponent,
    ProductsDashbordComponent,
    ProductsFormComponent,
    GetconfirmationComponent,
    UserDashbordComponent,
    UserFormComponent,
    FairsDashbordComponent,
    FairsDetailsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
