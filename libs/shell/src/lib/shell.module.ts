import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const shellRoutes: Route[] = [
  {
    path: 'recipe-list',
    loadChildren: () =>
      import('@cook-it/feature-recipe-list').then(
        (m) => m.SidenavComponentModule
      ),
  },];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(shellRoutes)],
})
export class ShellModule {}
