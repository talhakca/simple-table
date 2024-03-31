import { createAction, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';


/* state key */
export const featureKey = 'app';

/* state interface */
export interface AppState {
}

export const initialState: AppState = {
};


export const appReducer = createReducer(
  initialState,
  /* Init Action */
  on(AppActions.InitAPP, () => ({
  }))
);
