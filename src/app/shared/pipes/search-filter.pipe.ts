import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from 'src/app/shared/interfaces/video-item.interface';

@Pipe({
  name: 'sortFilter',
})
export default class SortFilterPipe implements PipeTransform {
  /* eslint-disable class-methods-use-this */
  transform(items: VideoItem[], sortFilter: string): VideoItem[] {
    if (!items) return [];
    if (!sortFilter) return items;

    return items.filter((item) => item
      .snippet
      .title
      .toLowerCase()
      .includes(sortFilter.toLowerCase()));
  }
}
