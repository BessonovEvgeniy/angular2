import {ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output} from '@angular/core';
import { CartItemModel } from "../../model/cart-item.model";

@Component({
  selector: 'app-cart-item',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() item: CartItemModel;
  @Output() addItem: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();
  @Output() removeItem: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor(@Optional() item: CartItemModel) {
    this.item = item;
  }

  onAdd(item: CartItemModel) {
    this.addItem.emit(item);
  }

  onDelete(item: CartItemModel) {
    this.removeItem.emit(item);
  }
}
