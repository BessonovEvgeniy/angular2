import {Injectable} from "@angular/core";
import {ProductModel} from "../../product/model/product.model";
import {CartItemModel} from "../model/cart-item.model";
import {CartSummaryModel} from "../model/cart-summary.model";

@Injectable()
export class CartService {

  items: CartItemModel[] = [];
  summary: CartSummaryModel = new CartSummaryModel();

  add(product: ProductModel) {
    console.log("Product " + product.name + " will be added to the cart.");

    var index = this.items.findIndex(item => (item.product.uid === product.uid));

    if (index > -1) {
      console.log("This product is already added. Cart Item Quantity will be increased.");
      this.items[index].quantity++;
    } else {
      console.log("New product " + product.name + " has been added to the cart.");
      this.items.push(new CartItemModel(product));
    }

    this.items.forEach(item => (console.log("Product " + item.product.name + " : " + item.quantity)));
    this.reCalcTotalValues();
  }

  delete(product: ProductModel){
    console.log("Product " + product.name + " will be removed from the cart.");

    var index = this.items.findIndex(item => (item.product.uid === product.uid));
    if (index > -1) {
      console.log("This product has founded in the cart.");
      if (this.items[index].quantity === 1) {
        console.log("Cart item will be removed from the cart.");
        this.items.slice(index,1);
      } else {
        console.log("Cart item quantity decreased.");
        this.items[index].quantity--;
      }
    } else {
      console.log("This product hasn't found. Nothing to delete from cart.");
    }
    this.reCalcTotalValues();
  }

  reCalcTotalValues() {
    console.log("reCalcTotalValues");
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

    console.log("Total price: " + totalPrice);
    console.log("Total quantity: " + totalQuantity);

    this.summary.totalPrice = totalPrice;
    this.summary.totalQuantity = totalQuantity;
  }
}
