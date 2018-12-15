import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage = window.localStorage;

  constructor() {
    this.localStorage.clear();
  }

  setItem(key: string, object: any) {
    this.localStorage.setItem(key, JSON.stringify(object));
  }

  getItem(key: string): any {
    return JSON.parse(this.localStorage.getItem(key));
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }

  getItems(): any[] {

    const requestedItems = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;

    console.log(keys);

    while (i--) {
      console.log(keys[i]);
      const data = localStorage.getItem(keys[i]);
      requestedItems.push(JSON.parse(data));
    }
    return requestedItems;
  }
}
