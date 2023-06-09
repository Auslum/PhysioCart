import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { ErrorInterceptorService } from './interceptors/error-interceptor.service';

import { NgMaterialModule } from './ng-material/ng-material.module';
import { AppRoutingModule } from './app-routing.module';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { SearchComponent } from './components/search/search.component';
import { AddtowishlistComponent } from './components/addtowishlist/addtowishlist.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtocartComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductFilterComponent,
    CheckoutComponent,
    LoginComponent,
    MyOrdersComponent,
    UserRegistrationComponent,
    HomeComponent,
    NavBarComponent,
    ShoppingcartComponent,
    ThemePickerComponent,
    PageNotFoundComponent,
    PriceFilterComponent,
    SearchComponent,
    AddtowishlistComponent,
    WishlistComponent
  ],
  imports: [
    NgMaterialModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
