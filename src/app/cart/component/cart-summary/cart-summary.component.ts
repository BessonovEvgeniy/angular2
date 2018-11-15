import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {Subscription} from "rxjs/index";
import {CartSummaryModel} from "../../model/cart-summary.model";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, OnDestroy {

  @Input() summary: CartSummaryModel;
  private sub: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.summary = this.cartService.summary;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
