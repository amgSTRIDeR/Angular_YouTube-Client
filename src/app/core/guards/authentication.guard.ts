import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import LocalStorageService from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthenticationGuard {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  canActivate(): boolean {
    const authToken = this.localStorageService.getItem('authToken');
    if (authToken) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
