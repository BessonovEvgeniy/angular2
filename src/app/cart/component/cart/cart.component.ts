import {Component, Input} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartModel} from "../../model/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cart: CartModel;

  constructor(public cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  onDelete(uid: string) {
    this.cartService.removeProductByUid(uid);
  }
}
