import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-ui-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-button.component.html',
	styleUrl: './ui-button.component.scss'
})
export class UiButtonComponent {
	@Input() label: string = 'Button';
	@Input() type: 'primary' | 'secondary' = 'primary';
	@Input() disabled: boolean = false;
}