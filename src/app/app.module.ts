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
import { CrisisModule } from './pages/crisis/crisis.module';
import {PipesModule} from './pages/pipes/pipes.module';
import {ExponentialStrengthModule} from './pipes/exponential-strength/exponential-strength.module';
import {FlyingHeroesModule} from './pages/flying-heroes/flying-heroes.module';
import {HeroAsyncMessagesModule} from './pages/hero-async-messages/hero-async-messages.module';
import {TodosServerFetchingModule} from './pages/todos-server-fetching/todos-server-fetching.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    TodosModule,
    HeroesModule,
    ListManagerModule,
    MessagesModule,
    MissionModule,
    HeaderModule,
    DashboardModule,
    DebounceModule,
    CrisisModule,
    PipesModule,
    ExponentialStrengthModule,
    FlyingHeroesModule,
    HeroAsyncMessagesModule,
    TodosServerFetchingModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

