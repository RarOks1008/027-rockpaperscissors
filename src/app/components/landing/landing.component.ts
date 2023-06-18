import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  @Output() startGameEvent: EventEmitter<void> = new EventEmitter<void>();

  start(): void {
    this.startGameEvent.next();
  }
}
