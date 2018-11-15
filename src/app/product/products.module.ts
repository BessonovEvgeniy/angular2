import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from "../product/component/product-item/product.component";
import {ProductService} from "./service/product.service";
import {ProductListComponent} from "./component/product-list/product-list.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [ProductService],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule {}
