import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SearchResultsItemComponent from './pages/main/search-results-item/search-results-item.component';
import SearchResultsListComponent from './pages/main/search-results-list/search-results-list.component';
import SortFilterPipe from '../shared/pipes/search-filter.pipe';
import SortingPipe from '../shared/pipes/sorting.pipe';
import YoutubeRoutingModule from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsItemComponent,
    SearchResultsListComponent,
    SortFilterPipe,
    SortingPipe,
  ],
  imports: [CommonModule, YoutubeRoutingModule],
})
export default class YoutubeModule {}
