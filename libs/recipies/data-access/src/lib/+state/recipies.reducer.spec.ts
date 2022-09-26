import { Action } from '@ngrx/store';

import * as RecipiesActions from './recipies.actions';
import { RecipiesEntity } from './recipies.models';
import {
  RecipiesState,
  initialRecipiesState,
  recipiesReducer,
} from './recipies.reducer';

describe('Recipies Reducer', () => {
  const createRecipiesEntity = (id: string, name = ''): RecipiesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Recipies actions', () => {
    it('loadRecipiesSuccess should return the list of known Recipies', () => {
      const recipies = [
        createRecipiesEntity('PRODUCT-AAA'),
        createRecipiesEntity('PRODUCT-zzz'),
      ];
      const action = RecipiesActions.loadRecipiesSuccess({ recipies });

      const result: RecipiesState = recipiesReducer(
        initialRecipiesState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = recipiesReducer(initialRecipiesState, action);

      expect(result).toBe(initialRecipiesState);
    });
  });
});
