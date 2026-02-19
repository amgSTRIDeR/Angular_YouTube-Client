import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import SearchService from 'src/app/core/services/search.service';
import { VideoItem } from 'src/app/shared/interfaces/video-item.interface';
import { map } from 'rxjs';
import DetailedService from '../services/detailed.service';

@Injectable({
  providedIn: 'root',
})

export default class DetailedGuard {
  constructor(
    private router: Router,
    private searchService: SearchService,
    private detailedService: DetailedService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.searchService.videoItems$.pipe(
      map((videoItems: VideoItem[]) => {
        const foundVideo = videoItems.find((video) => video.id.videoId === id);
        if (foundVideo) {
          this.detailedService.videoItem = foundVideo;
          return true;
        }
        this.router.navigate(['/404']);
        return false;
      }),
    );
  }
}
