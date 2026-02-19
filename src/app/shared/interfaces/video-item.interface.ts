import { Snippet } from './snippet.interface';
import { Statistics } from './statistics.interface';

export interface VideoItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
  statistics: Statistics;
}
