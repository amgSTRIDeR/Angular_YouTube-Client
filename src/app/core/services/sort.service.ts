import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class SortService {
  sortKeyValue = new BehaviorSubject<string>('');

  sortKey$ = this.sortKeyValue.asObservable();

  setSortKey(sortKey: string) {
    this.sortKeyValue.next(sortKey);
  }
}
