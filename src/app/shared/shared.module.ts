import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommunicatorService} from "./service/communicator.service";
import {HighlightDirective} from "./directive/highlight.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [HighlightDirective],
  providers: [CommunicatorService],
  exports: [HighlightDirective]
})
export class SharedModule {}
