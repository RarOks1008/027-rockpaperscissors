import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ScoreComponent } from './pages/score/score.component';
import { GameComponent } from './pages/game/game.component';
import { Page404Component } from './pages/page404/page404.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LandingComponent } from './components/landing/landing.component';
import { GamemodeComponent } from './components/gamemode/gamemode.component';
import { PlaymodeComponent } from './components/playmode/playmode.component';
import { ButtonComponent } from './components/button/button.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScoreComponent,
    GameComponent,
    Page404Component,
    LandingComponent,
    GamemodeComponent,
    PlaymodeComponent,
    ButtonComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
