import { Injectable } from '@angular/core';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { initRecipies } from './recipies.actions';
import { RecipiesState, initialRecipiesState } from './recipies.reducer';

@Injectable()
export class RecipiesStore
  extends ComponentStore<RecipiesState>
  implements OnStoreInit
{
  constructor(private store: Store<RecipiesState>) {
    super(initialRecipiesState);
  }

  ngrxOnStoreInit() {
    this.store.dispatch(initRecipies());
  }
}
