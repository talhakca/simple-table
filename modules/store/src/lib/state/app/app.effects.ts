import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AppActions from './app.actions';
import { map, mergeMap } from 'rxjs/operators';
import { TariffService } from '@verivox/services';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private tariffService: TariffService
  ) { }

  getTariffs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AppActions.GetTariffs
      ),
      mergeMap(() => this.tariffService.getTariffs().pipe(
        map(tariffs => AppActions.GetTariffsSuccessful({ payload: { tariffs } }))
      ))
    )
  );

  initApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AppActions.InitAPP
      ),
      map(() => AppActions.GetTariffs())
    )
  );
}
