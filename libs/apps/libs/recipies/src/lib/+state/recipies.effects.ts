import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, tap, map, of, switchMap } from 'rxjs';
import { RecipiesService } from '../recipies.service';

import * as RecipiesActions from './recipies.actions';
import * as RecipiesFeature from './recipies.reducer';

@Injectable()
export class RecipiesEffects {
  
  constructor(private readonly actions$: Actions, private recipiesService: RecipiesService) {}


      init$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(RecipiesActions.initRecipies),
          switchMap(() => {
            return this.recipiesService.getRecipies().pipe(
              tap((val) => console.log(val)),
              map((recipies) => {
                return RecipiesActions.loadRecipiesSuccess({recipies: recipies})
                }),
              catchError((error) => 
              {
                return of(RecipiesActions.loadRecipiesFailure(error))
              })
            )
          })
        )
      })

      // fetch({
      //   run: (action) => {
      //     // Your custom service 'load' logic goes here. For now just return a success action...
      //     return RecipiesActions.loadRecipiesSuccess({ recipies: [] });
      //   },
      //   onError: (action, error) => {
      //     console.error('Error', error);
      //     return RecipiesActions.loadRecipiesFailure({ error });
      //   },
      // })
}
