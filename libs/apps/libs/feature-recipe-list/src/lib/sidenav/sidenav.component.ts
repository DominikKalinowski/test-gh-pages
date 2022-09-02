import {MatSidenavModule} from '@angular/material/sidenav';

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { RecipiesState, RecipiesEntity, initRecipies, getAllRecipies } from '@cook-it/apps/libs/recipies';
import { Observable } from 'rxjs';
import * as fromRecipies from '@cook-it/apps/libs/recipies';
import { EffectsModule } from '@ngrx/effects';
import * as recipiesEffects from 'libs/apps/libs/recipies/src/lib/+state/recipies.effects';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'cook-it-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {

  recipies$!: Observable<RecipiesEntity[]>;

  constructor(private store: Store<RecipiesState>) {}

  ngOnInit(): void {
    this.store.dispatch(initRecipies());
    this.recipies$ = this.store.select<RecipiesEntity[]>(getAllRecipies);
  }
}

const materialModules = [
  MatSidenavModule
];


@NgModule({
  imports: [CommonModule, 
    ...materialModules,
    StoreModule.forRoot({}), 
    StoreModule.forFeature(
      fromRecipies.RECIPIES_FEATURE_KEY,
      fromRecipies.recipiesReducer
    ),
    EffectsModule.forRoot(), 
    HttpClientModule,
    EffectsModule.forFeature([recipiesEffects.RecipiesEffects]),
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavComponentModule {}
