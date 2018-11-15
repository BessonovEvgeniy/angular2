import {ProductModel} from "../../product/model/product.model";

export class CartItemModel {

  product: ProductModel;
  quantity: number = 1;

  constructor(product: ProductModel) {
    this.product = product;
  }
}
