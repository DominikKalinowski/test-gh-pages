import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  RecipiesState,
  RecipiesEntity,
  getAllRecipies,
  RecipiesDataAccessModule,
} from '@cook-it/recipies/data-access';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { RecipiesUiRecipiesSidebarModule } from '@cook-it/recipies/ui-recipies-sidebar';

@Component({
  selector: 'cook-it-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  recipies$: Observable<RecipiesEntity[]> =
    this.store.select<RecipiesEntity[]>(getAllRecipies);

  constructor(private store: Store<RecipiesState>) {}
}

const materialModules = [MatSidenavModule, MatListModule];

const routes: Route[] = [{ path: 'recipe-list', component: SidenavComponent }];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules,
    HttpClientModule,
    RouterModule.forChild(routes),
    RecipiesDataAccessModule,
    RecipiesUiRecipiesSidebarModule
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavComponentModule {}
