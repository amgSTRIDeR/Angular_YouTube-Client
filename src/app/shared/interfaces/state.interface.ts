import { CustomCard } from './custom-card.interface';
import { VideoItem } from './video-item.interface';

export interface State {
  videoItems: VideoItem[];
  customCards: CustomCard[];
}
