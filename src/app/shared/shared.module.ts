import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommunicatorService} from "./service/communicator.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [CommunicatorService],
  exports: []
})
export class SharedModule {}
