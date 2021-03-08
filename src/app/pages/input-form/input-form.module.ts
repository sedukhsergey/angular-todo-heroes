import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormComponent } from './input-form.component';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../../app.module';
import {TabContainerComponent} from '../../tab-container/tab-container.component';



@NgModule({
  declarations: [InputFormComponent, TabContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [TabContainerComponent]
})
export class InputFormModule { }
