import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroAsyncMessagesComponent } from './hero-async-messages.component';



@NgModule({
  declarations: [HeroAsyncMessagesComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroAsyncMessagesComponent]
})
export class HeroAsyncMessagesModule { }
