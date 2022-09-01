import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'cook-it-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

const materialModules = [
  MatSidenavModule
];


@NgModule({
  imports: [CommonModule, ...materialModules],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavComponentModule {}
