import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ScoreComponent } from './pages/score/score.component';
import { GameComponent } from './pages/game/game.component';
import { Page404Component } from './pages/page404/page404.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LandingComponent } from './components/landing/landing.component';
import { GamemodeComponent } from './components/gamemode/gamemode.component';
import { PlayermodeComponent } from './components/playermode/playermode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScoreComponent,
    GameComponent,
    Page404Component,
    LandingComponent,
    GamemodeComponent,
    PlayermodeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
