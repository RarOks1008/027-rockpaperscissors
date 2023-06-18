import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { GameComponent } from "./pages/game/game.component";
import { ScoreComponent } from "./pages/score/score.component";
import { Page404Component } from "./pages/page404/page404.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'game',
        component: GameComponent
    },
    {
        path: 'score',
        component: ScoreComponent
    },
    {
        path: '404',
        component: Page404Component
    },
    {
        path: '**',
        redirectTo: '404'
    }
];