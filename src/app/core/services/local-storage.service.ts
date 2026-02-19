import { Injectable } from '@angular/core';
// eslint-disable-next-line no-console
@Injectable({
  providedIn: 'root',
})
export default class LocalStorageService {
  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
