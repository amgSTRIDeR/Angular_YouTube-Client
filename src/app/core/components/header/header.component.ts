import { Component, OnInit } from '@angular/core';
import FilterService from 'src/app/core/services/filter.service';
import SearchService from 'src/app/core/services/search.service';
import SortService from 'src/app/core/services/sort.service';
import LoginService from 'src/app/auth/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  public showFilteringBlock = false;

  public sortKey = '';

  public filterText = '';

  public searchText = '';

  public isUserLoggedIn = false;

  constructor(
    private sortService: SortService,
    private searchService: SearchService,
    private filterService: FilterService,
    public loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginService.isUserLoggedIn$.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }

  search() {
    if (this.router.url !== 'main') {
      this.router.navigate(['main']);
    }
    this.searchService.setSearchText(this.searchText);
  }

  changeSortKey(key: string) {
    switch (key) {
      case 'date':
        if (this.sortKey === 'dateAsc') {
          this.sortKey = 'dateDesc';
        } else if (this.sortKey === 'dateDesc') {
          this.sortKey = '';
        } else {
          this.sortKey = 'dateAsc';
        }
        break;
      case 'views':
        if (this.sortKey === 'viewsAsc') {
          this.sortKey = 'viewsDesc';
        } else if (this.sortKey === 'viewsDesc') {
          this.sortKey = '';
        } else {
          this.sortKey = 'viewsAsc';
        }
        break;
      default:
        this.sortKey = '';
    }

    this.setSortKey(this.sortKey);
  }

  setSortKey(sortKey: string) {
    this.sortService.setSortKey(sortKey);
  }

  setFilter() {
    this.filterService.setFilter(this.filterText);
  }

  logout() {
    this.loginService.userLogout();
  }

  toLoginPage() {
    this.router.navigate(['/login']);
  }

  toMainPage() {
    this.router.navigate(['/']);
  }

  toAdminPage() {
    this.router.navigate(['/admin']);
  }

  toCustomCards() {
    this.router.navigate(['main/custom-cards']);
  }
}
