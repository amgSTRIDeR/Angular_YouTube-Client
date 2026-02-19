import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import LocalStorageService from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  public isUserLoggedIn = new BehaviorSubject<boolean>(false);

  public isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {
    const authToken = this.localStorageService.getItem('authToken');
    if (authToken) {
      this.isUserLoggedIn.next(true);
    }
  }

  userLogin(name: string, password: string) {
    this.isUserLoggedIn.next(true);
    this.router.navigate(['/']);
    this.localStorageService.setItem('authToken', `${name}-${password}`);
  }

  userLogout() {
    this.isUserLoggedIn.next(false);
    this.router.navigate(['/login']);
    this.localStorageService.removeItem('authToken');
  }
}
