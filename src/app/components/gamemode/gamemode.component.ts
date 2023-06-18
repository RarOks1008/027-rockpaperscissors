import { Component, EventEmitter, Output } from '@angular/core';
import { GameMode } from 'src/app/types/Mode.type';

@Component({
  selector: 'app-gamemode',
  templateUrl: './gamemode.component.html',
  styleUrls: ['./gamemode.component.scss']
})
export class GamemodeComponent {
  @Output() backEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() modeEvent: EventEmitter<GameMode> = new EventEmitter<GameMode>();

  setMode(mode: GameMode): void {
    this.modeEvent.next(mode);
  }

  back(): void {
    this.backEvent.next();
  }
}
