import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cook-it-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [TrialComponent],
  exports: [TrialComponent],
})
export class TrialComponentModule {}
