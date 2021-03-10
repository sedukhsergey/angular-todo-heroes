import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTemplateComponent } from './reusable-template.component';
import {CardModule} from '../../components/card/card.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ReusableTemplateComponent],
  imports: [
    CommonModule,
    CardModule,
    FormsModule
  ],
})
export class ReusableTemplateModule { }
