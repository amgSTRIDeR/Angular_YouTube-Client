import { createAction, props } from '@ngrx/store';
import { VideoItem } from '../shared/interfaces/video-item.interface';
import { CustomCard } from '../shared/interfaces/custom-card.interface';

export const loadVideoItems = createAction(
  '[Search] Load Video Items',
  props<{ videoItems: VideoItem[] }>(),
);

export const addCustomCard = createAction(
  '[Admin Page] Add Custom Card',
  props<{ customCard: CustomCard }>(),
);
