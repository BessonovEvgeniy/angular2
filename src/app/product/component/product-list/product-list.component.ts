import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ProductModel} from "../../model/product.model";
import {CommunicatorService} from "../../../shared/service/communicator.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  @Input() products: ProductModel[];

  constructor(private productService: ProductService,  private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuy(product: ProductModel) {
    console.log("You bought it!");
    this.communicatorService.publishAddData(product);
  }
}
