import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodosModule} from './todos/todos.module';
import {HeroesModule} from './heroes/heroes.module';
import {ListManagerModule} from './list-manager/list-manager.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TodosModule,
    HeroesModule,
    ListManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
