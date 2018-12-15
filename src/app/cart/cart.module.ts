import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartSummaryComponent
  ],
  providers: [],
  exports: [CartListComponent]
})
export class CartModule {}
