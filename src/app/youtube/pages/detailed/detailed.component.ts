import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoItem } from 'src/app/shared/interfaces/video-item.interface';
import { Router } from '@angular/router';
import DetailedService from '../../services/detailed.service';

@Component({
  selector: 'app-detailed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export default class DetailedComponent implements OnInit {
  public bgColor = '#2F80ED';

  public cardDate = '';

  videoItem = this.detailedService.videoItem as VideoItem;

  constructor(private detailedService: DetailedService, private router: Router) {}

  ngOnInit() {
    this.cardDate = `${new Date(
      this.videoItem.snippet.publishedAt,
    ).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`;
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

  returnBack() {
    this.router.navigate(['/main']);
  }
}
