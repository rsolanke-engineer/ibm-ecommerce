import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from './services/product.service';
import { SearchComponent } from './components/search/search.component';
import { UIShellModule, IconModule } from 'carbon-components-angular';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';




import myAppConfig from './config/my-app-config';

import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    HeaderComponent,
    ProductComponent,
    ProductPageComponent,
    ProductCardComponent,
    HomeComponent,
    SearchComponent,
    CartStatusComponent,
    CartDetailsComponent,
    LoginComponent,
    LoginStatusComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UIShellModule,
    IconModule,
    RouterModule,
    ReactiveFormsModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
