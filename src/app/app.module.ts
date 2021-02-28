import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodosModule} from './pages/todos/todos.module';
import {HeroesModule} from './pages/heroes/heroes.module';
import {ListManagerModule} from './pages/list-manager/list-manager.module';
import {MessagesModule} from './modules/messages/messages.module';
import {MissionModule} from './pages/mission/mission.module';
import {HeaderModule} from './modules/header/header.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {CommonModule} from '@angular/common';
import {DebounceModule} from './modules/debounce/debounce.module';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TodosModule,
    HeroesModule,
    ListManagerModule,
    MessagesModule,
    MissionModule,
    HeaderModule,
    DashboardModule,
    DebounceModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
