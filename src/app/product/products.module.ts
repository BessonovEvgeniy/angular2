import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from "../product/component/product-item/product.component";
import {ProductListComponent} from "./component/product-list/product-list.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductsModule {}
