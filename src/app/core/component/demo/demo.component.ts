import {Component, OnInit, Optional} from '@angular/core';
import {LocalStorageService} from '../../service/localstorage.service';
import {ConfigOptionsService} from '../../service/config-options.service';
import {ConstantsService} from '../../service/constants.service';
import {GeneratorService} from '../../service/generator.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(@Optional() storage: LocalStorageService,
              @Optional() configs: ConfigOptionsService,
              @Optional() constants: ConstantsService,
              @Optional() generator: GeneratorService) { }

  ngOnInit() {
  }

}
