import { Thumbnail } from './thumbnail.interface';

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishedTime: string;
  publishedAt: string;
  thumbnails: {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
    standard?: Thumbnail;
    maxres?: Thumbnail;
  };
  title: string;
}
