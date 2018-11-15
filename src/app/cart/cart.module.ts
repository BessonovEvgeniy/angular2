import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from "./service/cart.service";
import { CartListComponent } from "./component/cart-list/cart-list.component";
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartSummaryComponent
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule {}
