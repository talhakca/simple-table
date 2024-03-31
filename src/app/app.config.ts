import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppEffects, appReducer, featureKey } from '@verivox/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(
      {
        [featureKey]: appReducer
      }
    ),
    provideEffects(
      AppEffects
    )
  ]
};
