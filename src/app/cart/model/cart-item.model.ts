import {ProductModel} from '../../product/model/product.model';

export class CartItemModel {

  product: ProductModel;
  quantity = 1;

  constructor(product: ProductModel) {
    this.product = product;
  }
}
