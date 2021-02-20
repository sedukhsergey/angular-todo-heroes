import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroBadgeComponent } from './hero-badge/hero-badge.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { AutofocusDirective } from './autofocus.directive';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TodosComponent,
    TodoComponent,
    HeroDetailComponent,
    HeroBadgeComponent,
    TodoEditComponent,
    AutofocusDirective,
    ClickStopPropagationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
