import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from "./directive/highlight.directive";
import {ChangeBorderDirective} from "./directive/chageFontSize.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [
    HighlightDirective,
    ChangeBorderDirective
  ],
  providers: [],
  exports: [
    HighlightDirective,
    ChangeBorderDirective
  ]
})
export class SharedModule {}
