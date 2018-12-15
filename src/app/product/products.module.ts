import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductViewComponent, ProductComponent, ProductListComponent } from './component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductsModule {}
