import { Component, Input } from '@angular/core';
import { UiTextComponent } from '../../ui/ui-text/ui-text.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, UiTextComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})

export class InfoCardComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() backgroundColor: 'primary' | 'secondary' | 'error' | 'secondary-50' = 'primary';
}
