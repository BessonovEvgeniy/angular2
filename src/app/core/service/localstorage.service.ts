import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage = new Map();

  setItem(key: string, object: any) {
    this.localStorage.set(key, JSON.stringify(object));
  }

  getItem(key: string) : any {
    return JSON.parse(this.localStorage.get(key));
  }

  removeItem(key: string) {
    this.localStorage.delete(key);
  }
}
