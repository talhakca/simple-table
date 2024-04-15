import { createAction, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { Tariff } from '@verivox/shared';


/* state key */
export const featureKey = 'app';

/* state interface */
export interface AppState {
  tariffs: Tariff[]
}

export const initialState: AppState = {
  tariffs: []
};


export const appReducer = createReducer(
  initialState,
  /* Init Action */
  on(AppActions.GetTariffsSuccessful, (state, action) => ({
    ...state,
    tariffs: action.payload.tariffs
  }))
);
