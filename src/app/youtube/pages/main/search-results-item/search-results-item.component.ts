import { Component, Input, OnInit } from '@angular/core';
import { VideoItem } from 'src/app/shared/interfaces/video-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
})
export default class SearchResultsItemComponent implements OnInit {
  @Input() videoItem: VideoItem;

  public imageMap: string[];

  public imageSize: string[];

  public bgColor = '#2F80ED';

  constructor(private router: Router) {
    this.videoItem = {} as VideoItem;
    this.imageMap = [];
    this.imageSize = [];
  }

  ngOnInit() {
    this.imageMap = [
      `${this.videoItem.snippet.thumbnails.default.url} 120w`,
      `${this.videoItem.snippet.thumbnails.medium.url} 320w`,
      `${this.videoItem.snippet.thumbnails.high.url} 480w`,
    ];

    this.imageSize = [
      '(max-width: 320px) 120px',
      '(max-width: 480px) 320px',
      '480px',
    ];

    const dateDiff = Date.now() - new Date(this.videoItem.snippet.publishedAt).getTime();
    const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 7) {
      this.bgColor = '#2F80ED';
    } else if (daysDiff >= 7 && daysDiff <= 30) {
      this.bgColor = '#27AE60';
    } else if (daysDiff > 30 && daysDiff <= 180) {
      this.bgColor = '#F2C94C';
    } else if (daysDiff > 180) {
      this.bgColor = '#EB5757';
    }
  }

  showDetails() {
    this.router.navigate([`/main/${this.videoItem.id.videoId}`]);
  }
}
