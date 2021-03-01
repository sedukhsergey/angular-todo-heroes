import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisItemDetailsComponent } from './crisis-item-details/crisis-item-details.component';


@NgModule({
  declarations: [CrisisListComponent, CrisisItemDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }
