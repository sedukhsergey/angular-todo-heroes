import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTemplateComponent } from './reusable-template.component';
import {CardModule} from '../../components/card/card.module';



@NgModule({
  declarations: [ReusableTemplateComponent],
  imports: [
    CommonModule,
    CardModule
  ],
})
export class ReusableTemplateModule { }
