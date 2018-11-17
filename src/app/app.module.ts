import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from "./cart/cart.module";
import { ProductsModule } from "./product/products.module";
import { SharedModule } from "./shared/shared.module";
import { OthersModule } from "./others/others.module";
import { CoreModule } from "./core/core.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    CartModule,
    ProductsModule,
    SharedModule,
    OthersModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
