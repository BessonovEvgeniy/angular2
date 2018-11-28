import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from "../product/component/product-item/product.component";
import {ProductListComponent} from "./component/product-list/product-list.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductsModule {}
