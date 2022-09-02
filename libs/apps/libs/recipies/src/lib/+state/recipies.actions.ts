import { createAction, props } from '@ngrx/store';
import { RecipiesEntity } from './recipies.models';

export const initRecipies = createAction('[Recipies Page] Init');

export const loadRecipiesSuccess = createAction(
  '[Recipies/API] Load Recipies Success',
  props<{ recipies: RecipiesEntity[] }>()
);

export const loadRecipiesFailure = createAction(
  '[Recipies/API] Load Recipies Failure',
  props<{ error: any }>()
);
