import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-ui-text',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './ui-text.component.html',
	styleUrl: './ui-text.component.scss'
})

export class UiTextComponent {
	// The HTML Tag passed as a input - can be: h1, h2, h3 etc.
	@Input() tag: string = 'p'; // Default to <p> if no tag is provided
	@Input() textAlign?: string;
	@Input() fontWeight?: string;
	@Input() className?: string;
	@Input() text: string = '';
	@Input() truncate: boolean = false;
	
	// Based on the Inputs given it generates the classnames for the html element
	get classList(): string {
		return `
			text
			${ this.textAlign ? `text--align-${this.textAlign}` : '' }
			${ this.tag ? `text--tag-${this.tag}` : '' }
			${ this.fontWeight ? `text--weight-${this.fontWeight}` : '' }
			${ this.truncate ? 'text--truncate' : '' }
			${ this.className ? this.className : '' }
		`
	}
}
