import { VideoItemLimited } from './video-item-limited.interface';

export interface SearchResultsList {
  etag: string;
  items: VideoItemLimited[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  regionCode: string;
}
