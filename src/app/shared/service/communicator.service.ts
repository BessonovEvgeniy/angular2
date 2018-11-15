import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {ProductModel} from "../../product/model/product.model";

@Injectable()
export class CommunicatorService {

  private channel = new Subject<ProductModel>();

  public channel$ = this.channel.asObservable();

  publishAddData(data: ProductModel) {
    this.channel.next(data);
  }
}
