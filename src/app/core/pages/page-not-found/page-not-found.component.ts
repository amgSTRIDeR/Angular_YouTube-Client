import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import LoginService from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export default class PageNotFoundComponent implements OnInit {
  public isUserLoggedIn = false;

  constructor(
    public loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginService.isUserLoggedIn$.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

  toLoginPage() {
    this.router.navigate(['/login']);
  }
}
