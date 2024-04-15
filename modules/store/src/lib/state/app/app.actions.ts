import { createAction, props } from '@ngrx/store';
import { Tariff } from '@verivox/shared'
/* action types */
export enum ActionTypes {
  InitAPP = '[APP] InitAPP',
  GetTariffs = '[TARIFF] GetTariffs',
  GetTariffsSuccessful = '[TARIFF] GetTariffsSuccessful',
}

/* get */
export const InitAPP = createAction(ActionTypes.InitAPP);

export const GetTariffs = createAction(ActionTypes.GetTariffs);
export const GetTariffsSuccessful = createAction(ActionTypes.GetTariffsSuccessful, props<{ payload: { tariffs: Tariff[] } }>());
