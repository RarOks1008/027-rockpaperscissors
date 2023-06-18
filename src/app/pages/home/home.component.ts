import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private readyToStart: boolean = false;
  private gamemode: string = '';
  private playermode: string = '';

  get gameMode(): string {
    return this.gamemode;
  }

  get isReadyToStart(): boolean {
    return this.readyToStart;
  }
}
