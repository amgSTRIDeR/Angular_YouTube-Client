import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from 'src/app/shared/interfaces/video-item.interface';

@Pipe({
  name: 'sorting',
})
export default class SortingPipe implements PipeTransform {
  /* eslint-disable class-methods-use-this */
  transform(items: VideoItem[], sortKey: string): VideoItem[] {
    if (!items || !sortKey) {
      return items;
    }
    switch (sortKey) {
      case 'dateAsc':
        return items.sort((a, b) => (new Date(a.snippet.publishedAt).getTime()
          > new Date(b.snippet.publishedAt).getTime()
          ? 1
          : -1));
      case 'dateDesc':
        return items.sort((a, b) => (new Date(a.snippet.publishedAt).getTime()
          < new Date(b.snippet.publishedAt).getTime()
          ? 1
          : -1));
      case 'viewsAsc':
        return items.sort((a, b) => (+a.statistics.viewCount > +b.statistics.viewCount ? 1 : -1));
      case 'viewsDesc':
        return items.sort((a, b) => (+a.statistics.viewCount < +b.statistics.viewCount ? 1 : -1));
      default:
        return items;
    }
  }
}
