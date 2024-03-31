import { createAction, props } from '@ngrx/store';

/* action types */
export enum ActionTypes {
  InitAPP = '[APP] InitAPP'
}

/* get */
export const InitAPP = createAction(ActionTypes.InitAPP);
