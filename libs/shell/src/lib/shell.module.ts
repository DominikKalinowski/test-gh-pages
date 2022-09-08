import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SidenavComponent } from '@cook-it/feature-recipe-list';

export const appsLibsShellRoutes: Route[] = [
  { path: 'recipe-list', component: SidenavComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appsLibsShellRoutes)],
})
export class ShellModule {}
