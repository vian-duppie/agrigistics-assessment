import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  standalone: true,
  imports: [],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss'
})
export class UiInputComponent {
    @Output() searchChange = new EventEmitter<string>();

    onInputChange(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.searchChange.emit(value);
    }
}
