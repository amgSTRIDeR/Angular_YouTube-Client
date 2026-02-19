import { Snippet } from './snippet.interface';

export interface VideoItemLimited {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
}
