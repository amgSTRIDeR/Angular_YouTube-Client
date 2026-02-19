import { createReducer, on } from '@ngrx/store';
import { loadVideoItems, addCustomCard } from './actions';
import { VideoItem } from '../shared/interfaces/video-item.interface';
import { CustomCard } from '../shared/interfaces/custom-card.interface';

export interface State {
  videoItems: VideoItem[];
  customItems: CustomCard[];
}

export const initialState: State = {
  videoItems: [],
  customItems: [],
};

export const reducer = createReducer(
  initialState,
  on(loadVideoItems, (state, { videoItems }) => ({
    ...state,
    videoItems: [...state.videoItems, ...videoItems],
  })),
  on(addCustomCard, (state, { customCard }) => ({
    ...state,
    customItems: [...state.customItems, customCard],
  })),
);
