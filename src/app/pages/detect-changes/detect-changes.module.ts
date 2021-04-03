import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectChangesComponent } from './detect-changes.component';
import { DetectChangesInsideComponent } from './detect-changes-inside/detect-changes-inside.component';



@NgModule({
  declarations: [DetectChangesComponent, DetectChangesInsideComponent],
  imports: [
    CommonModule
  ]
})
export class DetectChangesModule { }
