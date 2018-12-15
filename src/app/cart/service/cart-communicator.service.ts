import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {CartItemModel} from '../model/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartCommunicatorService {

  private channel = new Subject<Array<CartItemModel>>();

  public channel$ = this.channel.asObservable();

  publishCartItemsChanged(data: CartItemModel[]) {
    this.channel.next(data);
  }
}
