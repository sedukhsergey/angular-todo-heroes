import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {CrisisItemDetailsComponent} from './crisis-item-details/crisis-item-details.component';

const routes: Routes = [
  { path: 'crisis',  component: CrisisListComponent },
  { path: 'crisis/:id', component: CrisisItemDetailsComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
