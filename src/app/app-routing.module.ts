import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProductsComponent} from "./components/products/products.component";

import {OrdersComponent} from "./components/orders/orders.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";

import {ManageordersComponent} from "./components/manageorders/manageorders.component";
import {ManageproductsComponent} from "./components/manageproducts/manageproducts.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdminGuard} from "./guards/admin.guard";
import {NewproductComponent} from "./components/newproduct/newproduct.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },

  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard, AdminGuard]},

  { path: 'admin/orders', component: ManageordersComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/products', component: ManageproductsComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/products/new', component: NewproductComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/products/:id', component: NewproductComponent, canActivate: [AuthGuard, AdminGuard] },

  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
