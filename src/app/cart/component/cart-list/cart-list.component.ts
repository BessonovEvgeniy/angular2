import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {Subscription} from "rxjs/index";
import {ProductModel} from "../../../product/model/product.model";
import {CartItemModel} from "../../model/cart-item.model";
import {ProductCommunicatorService} from "../../../product/service/product-communicator.service";
import {ConstantsService} from "../../../core/service/constants.service";
import {CartCommunicatorService} from "../../service/cart-communicator.service";

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
  private itemsChangedSub: Subscription;
  items: CartItemModel[];

  orderByField: string = 'quantity';
  dsc: boolean = false;

  constructor(public constants: ConstantsService,
              public cartService: CartService,
              private productCommunicatorService: ProductCommunicatorService,
              private cartCommunicatorService: CartCommunicatorService) {}

  ngOnInit(): void {
    this.sub = this.productCommunicatorService.channel$.subscribe(product => (this.cartService.add(product)));
    this.itemsChangedSub = this.cartCommunicatorService.channel$.subscribe(items => (this.items = items));
    this.items = this.cartService.items;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.itemsChangedSub.unsubscribe();
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

  onSortChange(dsc: boolean) {
    this.dsc = dsc;
  }
}
