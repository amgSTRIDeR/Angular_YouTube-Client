import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoItem } from 'src/app/shared/interfaces/video-item.interface';
import {
  BehaviorSubject,
  of,
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mergeMap,
  switchMap,
} from 'rxjs';
import { VideoItemLimited } from 'src/app/shared/interfaces/video-item-limited.interface';
import { SearchResultsList } from 'src/app/shared/interfaces/search-results-list.interface';
import { Statistics } from 'src/app/shared/interfaces/statistics.interface';
import { Store } from '@ngrx/store';
import { loadVideoItems } from 'src/app/redux/actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  private searchUrl = 'https://www.googleapis.com/youtube/v3/search';

  private statisticsUrl = 'https://www.googleapis.com/youtube/v3/videos';

  private apiKey = environment.youtubeApiKey;

  private searchText = new BehaviorSubject<string>('');

  searchText$ = this.searchText.asObservable();

  public videoItems = new BehaviorSubject<VideoItem[]>([]);

  videoItems$: Observable<VideoItem[]> = this.searchText$.pipe(
    filter((text) => text.length > 2),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap((text: string) => {
      if (!this.apiKey) {
        return of([] as VideoItemLimited[]);
      }

      const params = new HttpParams()
        .set('q', text)
        .set('part', 'snippet')
        .set('type', 'video')
        .set('key', this.apiKey)
        .set('maxResults', '10');

      return this.http
        .get<SearchResultsList>(this.searchUrl, { params })
        .pipe(map((data: SearchResultsList) => data.items));
    }),
    mergeMap((videos: VideoItemLimited[]) => {
      if (!videos.length || !this.apiKey) {
        return of([] as VideoItem[]);
      }

      const videoIds = videos.map(
        (video: VideoItemLimited) => video.id.videoId,
      );
      const params = new HttpParams()
        .set('id', videoIds.join(','))
        .set('part', 'statistics')
        .set('key', this.apiKey);

      return this.http
        .get<{ items: { id: string; statistics: Statistics }[] }>(
        this.statisticsUrl,
        { params },
      )
        .pipe(
          map((data) => {
            const stats = data.items.reduce(
              (
                acc: { [key: string]: Statistics },
                item: { id: string; statistics: Statistics },
              ) => {
                acc[item.id] = item.statistics;
                return acc;
              },
              {},
            );
            return videos.map((video: VideoItemLimited) => ({
              ...video,
              statistics: stats[video.id.videoId],
            }));
          }),
        );
    }),
  );

  constructor(private http: HttpClient, private store: Store) {
    if (!this.apiKey) {
      console.warn('YouTube API key is empty. Use local configuration (npm run start:local) or set CI secret YOUTUBE_API_KEY.');
    }

    this.videoItems$.subscribe((videos) => {
      this.addVideos(videos);
    });
  }

  setSearchText(text: string) {
    this.searchText.next(text);
  }

  addVideos(videos: VideoItem[]) {
    this.store.dispatch(loadVideoItems({ videoItems: videos }));
  }
}
