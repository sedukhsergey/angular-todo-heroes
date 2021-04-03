import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detect-changes-inside',
  templateUrl: './detect-changes-inside.component.html',
  styleUrls: ['./detect-changes-inside.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectChangesInsideComponent {
  @Input() todos: any;
  @Input() config: any;

  get runChangeDetection() {
    console.log('TodosComponent - Checking the view');
    return true;
  }

}
