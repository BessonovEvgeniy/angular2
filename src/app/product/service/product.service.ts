import {Injectable} from '@angular/core';
import {Category, ProductModel} from '../model/product.model';
import {CommentModel} from '../model/comment.model';
import {LocalStorageService} from '../../core/service/localstorage.service';

const products: Array<ProductModel> = [
  {
    'uid' : '1',
    'name': 'banana',
    'description': 'small yellow banana',
    'price': 10.12,
    'isAvailable': false,
    'category': Category.Fruits,
    'categoryName': Category[Category.Fruits],
    'comments': [new CommentModel('1001', 'Testy small banana')]
  },
  {
    'uid' : '2',
    'name': 'apple',
    'description': 'green apple',
    'price': 6.99,
    'isAvailable': true,
    'category': Category.Fruits,
    'categoryName': Category[Category.Fruits],
    'comments': [new CommentModel('1002', 'Testy apple')]
  },
  new ProductModel('3', 'Carrot', 'Big orange carrot', 15.05, true, Category.Vegetables)
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private storage = new LocalStorageService();

  constructor() {
    products.forEach((product) => {
      this.storage.setItem(product.uid, product);
    });
  }

  getProducts(): Promise<Array<ProductModel>> {
    return new Promise<Array<ProductModel>>((resolve, reject) => setTimeout(() => resolve(this.storage.getItems()), 123));
  }

  getProduct(id: string): Promise<ProductModel> {
    console.log(id + ' requested');

    const product = this.storage.getItem(id);

    return new Promise<ProductModel>((resolve, reject) => setTimeout(() => resolve(product), 123));
  }
}

