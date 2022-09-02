import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponentModule } from '@cook-it/apps/libs/feature-recipe-list';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as shell from '@cook-it/apps/libs/shell';
import { RouterModule } from '@angular/router';

const environment = {
  development: true,
  production: false,
};

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidenavComponentModule,
    shell.AppsLibsShellModule,
    RouterModule,
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
