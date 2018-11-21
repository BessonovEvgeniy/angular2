import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {Subscription} from "rxjs/index";
import {ProductModel} from "../../../product/model/product.model";
import {CartItemModel} from "../../model/cart-item.model";
import {CommunicatorService} from "../../../product/service/communicator.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  @Input() items: CartItemModel[];

  constructor(public cartService: CartService, private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    this.sub = this.communicatorService.channel$.subscribe(product => (this.cartService.add(product)));
    this.items = this.cartService.items;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onDelete(product: ProductModel) {
    this.cartService.delete(product);
  }


  onAdd(product: ProductModel) {
    this.cartService.add(product);
  }

  onClearCart(){
    this.cartService.cleanCart();
  }
}
