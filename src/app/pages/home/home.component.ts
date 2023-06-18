import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameMode, PlayMode } from 'src/app/types/Mode.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private readyToStart: boolean = false;
  private gamemode: GameMode | null;
  private playmode: PlayMode | null;

  constructor(private _router: Router) { }

  get gameMode(): string | null {
    return this.gamemode;
  }

  get isReadyToStart(): boolean {
    return this.readyToStart;
  }

  get playMode(): string | null {
    return this.playmode;
  }

  startGame(): void {
    this.readyToStart = true;
  }

  gameModeBack(): void {
    this.readyToStart = false;
  }

  gameModeChange(event: GameMode): void {
    this.gamemode = event;
  }

  playModeBack(): void {
    this.gamemode = null;
  }

  playModeChange(event: PlayMode): void {
    this.playmode = event;
  }

  startBack(): void {
    this.playmode = null;
  }

  startStart(): void {
    this._router.navigate(
      ['/game'],
      {
        queryParams: {
          gamemode: this.gameMode,
          playmode: this.playMode
        }
      }
    );
  }
}
