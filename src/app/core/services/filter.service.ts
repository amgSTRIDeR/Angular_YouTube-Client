import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class FilterService {
  filterValue = new BehaviorSubject<string>('');

  filter$ = this.filterValue.asObservable();

  setFilter(filter: string) {
    this.filterValue.next(filter);
  }
}
