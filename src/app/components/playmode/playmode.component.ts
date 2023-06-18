import { Component, EventEmitter, Output } from '@angular/core';
import { PlayMode } from 'src/app/types/Mode.type';

@Component({
  selector: 'app-playmode',
  templateUrl: './playmode.component.html',
  styleUrls: ['./playmode.component.scss']
})
export class PlaymodeComponent {
  @Output() backEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() modeEvent: EventEmitter<PlayMode> = new EventEmitter<PlayMode>();

  setMode(mode: PlayMode): void {
    this.modeEvent.next(mode);
  }

  back(): void {
    this.backEvent.next();
  }
}
