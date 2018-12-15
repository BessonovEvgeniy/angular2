import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ProductService} from './product/service/product.service';
import {CartService} from './cart/service/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService]
})
export class AppComponent  implements AfterViewInit {
  title = 'shop';

  @ViewChild('appTitle')
  h1: ElementRef;

  ngAfterViewInit() {
    (<HTMLElement>this.h1.nativeElement).innerText = 'This is changed title from parent component.';
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }
  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }
}
