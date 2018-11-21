import {Injectable} from "@angular/core";
import {ProductModel} from "../../product/model/product.model";
import {CartItemModel} from "../model/cart-item.model";
import {CartSummaryModel} from "../model/cart-summary.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItemModel[] = [];
  summary: CartSummaryModel = new CartSummaryModel();

  add(product: ProductModel) {
    console.log("Product " + product.name + " will be added to the cart.");

    var index = this.items.findIndex(item => (item.product.uid === product.uid));

    if (index > -1) {
      this.items[index].quantity++;
    } else {
      this.items.push(new CartItemModel(product));
    }

    this.items.forEach(item => (console.log("Product " + item.product.name + " : " + item.quantity)));
    this.reCalcTotalValues();
  }

  delete(product: ProductModel){
    console.log("Product " + product.name + " will be removed from the cart.");

    var index = this.items.findIndex(item => (item.product.uid === product.uid));
    if (index > -1) {
      if (this.items[index].quantity === 1) {
        this.items.splice(index,1);
      } else {
        this.items[index].quantity--;
      }
    } else {
      console.log("This product hasn't found. Nothing to delete from cart.");
    }
    this.reCalcTotalValues();
  }

  reCalcTotalValues() {
    var totalPrice = this.items.reduce((sum, item) => {
      if (item.product.price >= 0) {
        return sum + item.product.price * item.quantity;
      } else {
        return sum;
      }
    }, 0);

    var totalQuantity = this.items.reduce((sum, item) => {
      if (item.product.price >= 0) {
        return sum + item.quantity;
      } else {
        return sum;
      }
    }, 0);

    this.summary.totalPrice = totalPrice;
    this.summary.totalQuantity = totalQuantity;
  }

  cleanCart() {
    this.items = [];
  }
}
