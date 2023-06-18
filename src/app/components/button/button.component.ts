import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() action: string = '';
  @Input() extra: string | boolean | number = true;
  @Output() buttonAction: EventEmitter<void> = new EventEmitter<void>();

  buttonClick(): void {
    this.buttonAction.next();
  }
}
