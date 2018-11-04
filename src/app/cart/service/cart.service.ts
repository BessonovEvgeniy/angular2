import {Injectable} from "@angular/core";
import {ProductModel} from "../../product/model/product.model";
import {CartModel} from "../model/cart.model";

@Injectable()
export class CartService{

  cart: CartModel = new CartModel();

  addProduct(product: ProductModel) {

    var products = this.cart.products;
    products.push(product);
    console.log(product.name + " has been added to the cart.");
  }

  removeProductByUid(uid: string) {
    var products = this.cart.products;
    if (products == null || products.length == 0) {
      console.log("Nothing to delete");
      return;
    }

    var index = products.findIndex(product => product.uid == uid);

    if (index > -1) {
      console.log(products[index].name + " has been deleted from cart.");
      products.splice(index,1);
    }
  }
}
