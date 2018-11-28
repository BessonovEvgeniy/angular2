import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {Subscription} from "rxjs/index";
import {ProductModel} from "../../../product/model/product.model";
import {CartItemModel} from "../../model/cart-item.model";
import {CommunicatorService} from "../../../product/service/communicator.service";
import {ConstantsService} from "../../../core/service/constants.service";

export const CONSTANTS = new ConstantsService();

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [
    {provide: ConstantsService, useValue: CONSTANTS}
  ]
})
export class CartListComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  items: CartItemModel[];

  constructor(public constants: ConstantsService,
              public cartService: CartService,
              private communicatorService: CommunicatorService) {}

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
    this.items = this.cartService.cleanCart();
  }
}
