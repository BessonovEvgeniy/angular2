import {Injectable} from "@angular/core";
import {Category, ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<ProductModel> = [
    {
      "uid" : "1",
      "name": "banana",
      "description": "small yellow banana",
      "price": 10.12,
      "isAvailable": false,
      "category": Category.Fruits,
      "categoryName": Category[Category.Fruits]
    },
    {
      "uid" : "2",
      "name": "apple",
      "description": "green apple",
      "price": 6.99,
      "isAvailable": true,
      "category": Category.Fruits,
      "categoryName": Category[Category.Fruits]
    },
    new ProductModel("3", "Carrot", "Big orange carrot", 15.05, true, Category.Vegetables)
  ];

  constructor(){}

  getProducts(): Promise<Array<ProductModel>> {
    return new Promise<Array<ProductModel>>((resolve, reject) => setTimeout(() => resolve(this.products), 123));
  }
}

