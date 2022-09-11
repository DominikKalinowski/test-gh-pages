import { MatSidenavModule } from '@angular/material/sidenav';

import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  RecipiesState,
  RecipiesEntity,
  getAllRecipies,
  RecipiesModule,
  RecipiesStore,
} from '@cook-it/recipies';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'cook-it-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideComponentStore(RecipiesStore)
  ]
})
export class SidenavComponent {
  recipies$: Observable<RecipiesEntity[]> = this.store.select<RecipiesEntity[]>(getAllRecipies);

  constructor(private store: Store<RecipiesState>) {}
}

const materialModules = [MatSidenavModule];

@NgModule({
  imports: [CommonModule, ...materialModules, RecipiesModule, HttpClientModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavComponentModule {}
