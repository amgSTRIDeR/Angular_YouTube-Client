import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './reducers';

const selectVideoState = createFeatureSelector<State>('youtube');

export const selectVideoItems = createSelector(
  selectVideoState,
  (state: State) => state.videoItems,
);

export const selectCustomItems = createSelector(
  selectVideoState,
  (state: State) => state.customItems,
);
