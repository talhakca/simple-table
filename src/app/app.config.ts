import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Store, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppEffects, AppState, InitAPP, appReducer, featureKey } from '@verivox/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export function initApplication(store: Store<{ app: AppState }>) {
  return () => new Promise(resolve => {
    store.dispatch(InitAPP());
    resolve(true);
  });
}

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
    ),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      multi: true,
      deps: [Store]
    }
  ]
};
