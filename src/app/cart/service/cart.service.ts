import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../../product/model/product.model';
import {CartItemModel} from '../model/cart-item.model';
import {CartSummaryModel} from '../model/cart-summary.model';
import {CartCommunicatorService} from './cart-communicator.service';
import {ProductCommunicatorService} from '../../product/service/product-communicator.service';
import {Subscription} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit, OnDestroy {

  private productSub: Subscription;
  items: CartItemModel[] = [];
  summary: CartSummaryModel = new CartSummaryModel();

  constructor(private cartCommunicator: CartCommunicatorService,
              private productCommunicatorService: ProductCommunicatorService) {
  }

  ngOnInit() {
    this.productSub = this.productCommunicatorService.channel$.subscribe(product => (this.add(product)));
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

  add(product: ProductModel) {
    console.log('Product ' + product.name + ' will be added to the cart.');

    const index = this.items.findIndex(item => (item.product.uid === product.uid));

    if (index > -1) {
      this.items[index].quantity++;
      this.items = [...this.items];
    } else {
      this.items = [...this.items, new CartItemModel(product)];
    }
    this.cartCommunicator.publishCartItemsChanged(this.items);
    this.items.forEach(item => (console.log('Product ' + item.product.name + ' : ' + item.quantity)));
    this.reCalcTotalValues();
  }

  delete(product: ProductModel) {
    console.log('Product ' + product.name + ' will be removed from the cart.');

    const index = this.items.findIndex(item => (item.product.uid === product.uid));
    if (index > -1) {
      if (this.items[index].quantity === 1) {
        this.items = [...this.items.splice(index, 1)];
      } else {
        this.items[index].quantity--;
        this.items = [...this.items];
      }
      this.cartCommunicator.publishCartItemsChanged(this.items);
      this.reCalcTotalValues();
    } else {
      console.log('This product hasn\'t found. Nothing to delete from cart.');
    }
  }

  reCalcTotalValues() {
    const totalPrice = this.items.reduce((sum, item) => {
      if (item.product.price >= 0) {
        return sum + item.product.price * item.quantity;
      } else {
        return sum;
      }
    }, 0);

    const totalQuantity = this.items.reduce((sum, item) => {
      if (item.product.price >= 0) {
        return sum + item.quantity;
      } else {
        return sum;
      }
    }, 0);

    this.summary.totalPrice = totalPrice;
    this.summary.totalQuantity = totalQuantity;
  }

  cleanCart(): CartItemModel[] {
    this.items = [];
    return this.items;
  }
}
