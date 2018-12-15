import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './product/products.module';
import { SharedModule } from './shared/shared.module';
import { OthersModule } from './others/others.module';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './core/component/demo/demo.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    FormsModule,

    CartModule,
    ProductsModule,
    SharedModule,
    OthersModule,
    CoreModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
