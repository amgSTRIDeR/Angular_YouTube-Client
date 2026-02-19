import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import SearchResultsListComponent from './pages/main/search-results-list/search-results-list.component';
import DetailedComponent from './pages/detailed/detailed.component';
import DetailedGuard from './guards/detailed.guard';
import CustomCardsComponent from './pages/custom-cards/custom-cards.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsListComponent,
  },
  {
    path: 'custom-cards',
    component: CustomCardsComponent,
  },
  {
    path: ':id',
    component: DetailedComponent,
    canActivate: [DetailedGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule {}
