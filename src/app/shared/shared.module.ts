import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from "./directive/highlight.directive";
import {ChangeBorderDirective} from "./directive/chageFontSize.directive";
import { OrderByPipe } from './pipe/order-by.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HighlightDirective,
    ChangeBorderDirective,
    OrderByPipe
  ],
  providers: [],
  exports: [
    HighlightDirective,
    ChangeBorderDirective,
    OrderByPipe
  ]
})
export class SharedModule {}
