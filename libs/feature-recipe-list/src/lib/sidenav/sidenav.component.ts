import { MatSidenavModule } from '@angular/material/sidenav';

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import {
  RecipiesState,
  RecipiesEntity,
  initRecipies,
  getAllRecipies,
  RecipiesModule,
} from '@cook-it/recipies';
import { Observable } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import * as recipiesEffects from 'libs/recipies/src/lib/+state/recipies.effects';
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

const materialModules = [MatSidenavModule];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules,
    RecipiesModule,
    EffectsModule.forRoot(),
    HttpClientModule,
    EffectsModule.forFeature([recipiesEffects.RecipiesEffects]),
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavComponentModule {}
