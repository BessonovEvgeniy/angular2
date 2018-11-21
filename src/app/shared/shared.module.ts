import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from "./directive/highlight.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [HighlightDirective],
  providers: [],
  exports: [HighlightDirective]
})
export class SharedModule {}
