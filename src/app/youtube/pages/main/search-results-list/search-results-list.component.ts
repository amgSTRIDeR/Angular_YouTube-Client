import { Component, OnInit } from '@angular/core';
import { VideoItem } from 'src/app/shared/interfaces/video-item.interface';
import FilterService from 'src/app/core/services/filter.service';
import SortService from 'src/app/core/services/sort.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { selectVideoItems } from 'src/app/redux/selectors';

@Component({
  selector: 'app-search-results-list',
  templateUrl: './search-results-list.component.html',
  styleUrls: ['./search-results-list.component.scss'],
})
export default class SearchResultsListComponent implements OnInit {
  videoItems: VideoItem[] = [];

  public showSearchResults = false;

  public filterText = '';

  public sortKey = '';

  constructor(
    private sortService: SortService,
    private filterService: FilterService,
    private store: Store<State>,
  ) {
    this.store.select(selectVideoItems).subscribe((items) => {
      this.videoItems = items;
      this.showSearchResults = true;
    });
  }

  ngOnInit(): void {
    this.filterService.filter$.subscribe((filterService) => {
      this.filterText = filterService;
    });

    this.sortService.sortKey$.subscribe((sortKey) => {
      this.sortKey = sortKey;
    });
  }
}
