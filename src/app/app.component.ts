import { Component } from '@angular/core';
import {ProductService} from "./product/service/product.service";
import {CartService} from "./cart/service/cart.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService]
})
export class AppComponent {
  title = 'shop';
}
