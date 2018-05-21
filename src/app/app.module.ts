import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ManageordersComponent } from './components/manageorders/manageorders.component';
import { ManageproductsComponent } from './components/manageproducts/manageproducts.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {UserService} from "./services/user.service";
import {AppRoutingModule} from "./app-routing.module";
import { OrdersComponent } from './components/orders/orders.component';

import {environment} from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireStorageModule} from "angularfire2/storage";
import {AngularFirestore} from "angularfire2/firestore";
import { NewproductComponent } from './components/newproduct/newproduct.component';
import {CategoryService} from "./services/category.service";
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import {CustomFormsModule} from "ng2-validation";
import { ProductcardComponent } from './components/productcard/productcard.component';
import {CartService} from "./services/cart.service";
import {CheckoutService} from "./services/checkout.service";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckoutComponent,
    CartComponent,
    ManageordersComponent,
    ManageproductsComponent,
    LoginComponent,
    OrdersComponent,
    NewproductComponent,
    ProductcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebasee),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AngularFirestore,
    CategoryService,
    ProductService,
    CustomFormsModule,
    CartService,
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
