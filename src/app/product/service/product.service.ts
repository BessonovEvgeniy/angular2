import {Injectable} from "@angular/core";
import {Category, ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(){}

  getProducts(): ProductModel[] {
    return [
      {
        "uid" : "1",
        "name": "banana",
        "description": "small yellow banana",
        "price": 10,
        "isAvailable": false,
        "category": Category.Fruits,
      },
      {
        "uid" : "2",
        "name": "apple",
        "description": "green apple",
        "price": 6,
        "isAvailable": true,
        "category": Category.Fruits,
      },
      new ProductModel("3", "Carrot", "Big orange carrot", 15, true, Category.Vegetables)
    ];
  }
}

