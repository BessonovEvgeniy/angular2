import {LocalStorageService} from './localstorage.service';
import {ConfigModel} from '../model/ConfigModel';

export class ConfigOptionsService {

  private configKey = 'CONFIG_KEY';

  constructor(private localStorageService: LocalStorageService) {}

  saveConfigOption(optionItem: ConfigModel): void {
    this.localStorageService.setItem(this.configKey, optionItem);
  }

  getConfigOption(): ConfigModel {
    return this.localStorageService.getItem(this.configKey);
  }
}
