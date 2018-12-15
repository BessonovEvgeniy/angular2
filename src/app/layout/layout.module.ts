import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CartInfoComponent, HomeComponent, PathNotFoundComponent} from './components';
import { ProductsModule } from '../product/products.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    HomeComponent,
    CartInfoComponent,
    PathNotFoundComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    CartModule
  ]
})
export class LayoutModule {
}
