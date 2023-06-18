import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  @Output() backEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() startEvent: EventEmitter<void> = new EventEmitter<void>();

  start(): void {
    this.startEvent.next();
  }

  back(): void {
    this.backEvent.next();
  }
}
