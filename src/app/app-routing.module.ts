import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { ProductComponent } from './components/product/product.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import {
  OktaCallbackComponent,
}
from '@okta/okta-angular';



import { LoginComponent } from './components/login/login.component';





const routes: Routes = [
  {path: "login/callback", component: OktaCallbackComponent},
  {path: "login", component: LoginComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "details", component: CartDetailsComponent},
  {path: 'search/:keyword', component: ProductComponent},
  {path: "product/:id", component: ProductPageComponent},
  {path: "home", component: HomeComponent},
  {path: "**", component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






