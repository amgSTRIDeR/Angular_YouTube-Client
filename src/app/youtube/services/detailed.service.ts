import { Injectable } from '@angular/core';
import { VideoItem } from 'src/app/shared/interfaces/video-item.interface';

@Injectable({
  providedIn: 'root',
})
export default class DetailedService {
  public videoItem: VideoItem | undefined;
}
