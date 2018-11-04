import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ProductModel} from "../../model/product.model";
import {CartService} from "../../../cart/service/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: ProductModel[];

  constructor(private productService: ProductService, private cartService: CartService) {
    this.products = this.productService.getProducts();
  }

  onBuy(product: ProductModel) {
    console.log("You bought it!");
    this.cartService.addProduct(product);
  }
}
