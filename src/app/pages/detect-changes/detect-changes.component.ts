import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detect-changes',
  templateUrl: './detect-changes.component.html',
  styleUrls: ['./detect-changes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectChangesComponent  {
  todos = [{ title: 'One' }, { title: 'Two' }];
  config = {
    position: 'top'
  }
  add() {
    this.todos.push({ title: 'Three' })
    console.log('this.todos',this.todos)
  }

  change() {
    this.config.position = this.config.position === 'top' ? 'bottom' : 'top'
  }

}
