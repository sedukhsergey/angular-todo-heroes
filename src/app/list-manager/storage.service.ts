import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    const items = localStorage.getItem(key);
    if (items) {
      return JSON.parse(items);
    }
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
