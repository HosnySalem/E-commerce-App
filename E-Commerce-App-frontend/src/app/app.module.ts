import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/product/products/products.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductsUserComponent } from './components/product/products-user/products-user.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchPipe } from './models/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProductFormComponent,
    ProductsUserComponent,
    CartComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
