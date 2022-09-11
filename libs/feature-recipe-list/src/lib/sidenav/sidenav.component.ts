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
import { Route, RouterModule } from '@angular/router';

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

  constructor(private store: Store<RecipiesState>, private recipiesStore: RecipiesStore) {}
}

const materialModules = [MatSidenavModule];

 const routes: Route[] = [
  { path: '', component: SidenavComponent },
];

@NgModule({
  imports: [CommonModule, ...materialModules, RecipiesModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavComponentModule {}
