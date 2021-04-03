import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './pages/heroes/heroes.component';
import {ListManagerComponent} from './pages/list-manager/list-manager.component';
import {TodosComponent} from './pages/todos/todos.component';
import {MissionComponent} from './pages/mission/mission.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {HeroDetailComponent} from './pages/heroes/hero-detail/hero-detail.component';
import {PipesComponent} from './pages/pipes/pipes.component';
import {FlyingHeroesComponent} from './pages/flying-heroes/flying-heroes.component';
import {HeroAsyncMessagesComponent} from './pages/hero-async-messages/hero-async-messages.component';
import {TodosServerFetchingComponent} from './pages/todos-server-fetching/todos-server-fetching.component';
import {ModalComponent} from './pages/modal/modal.component';
import {InputFormComponent} from './pages/input-form/input-form.component';
import {ReusableTemplateComponent} from './pages/reusable-template/reusable-template.component';
import {SwitchCaseComponent} from './pages/switch-case/switch-case.component';
import {HeroesServerComponent} from './pages/heroes-server/heroes-server.component';
import {DetectChangesComponent} from './pages/detect-changes/detect-changes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'list-manager', component: ListManagerComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'flying-heroes', component: FlyingHeroesComponent},
  { path: 'hero-async', component: HeroAsyncMessagesComponent},
  { path: 'todos-server-fetching', component: TodosServerFetchingComponent},
  { path: 'modal', component: ModalComponent},
  { path: 'input-form', component: InputFormComponent},
  { path: 'reusable-template', component: ReusableTemplateComponent},
  { path: 'switch-case', component: SwitchCaseComponent},
  { path: 'heroes-server', component: HeroesServerComponent},
  { path: 'detect-changes', component: DetectChangesComponent},
  // { path: 'heroes-server/:page', component: HeroesServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
