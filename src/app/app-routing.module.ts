import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './pages/heroes/heroes.component';
import {ListManagerComponent} from './pages/list-manager/list-manager.component';
import {TodosComponent} from './pages/todos/todos.component';
import {MissionComponent} from './pages/mission/mission.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {HeroDetailComponent} from './pages/heroes/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'list-manager', component: ListManagerComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
