import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AppActions from './app.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
  ) { }

  initApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AppActions.InitAPP
      ),
      map(() => { })
    ), { dispatch: false }
  );
}
