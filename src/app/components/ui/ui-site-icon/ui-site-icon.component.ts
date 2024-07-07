import { Component, Input } from '@angular/core';
import { UiTextComponent } from '../ui-text/ui-text.component';

@Component({
  selector: 'app-ui-site-icon',
  standalone: true,
  imports: [UiTextComponent],
  templateUrl: './ui-site-icon.component.html',
  styleUrl: './ui-site-icon.component.scss'
})
export class UiSiteIconComponent {
  @Input() text: string = '';
  @Input() textTag: string = 'label';
  @Input() textAlign = 'left';
  @Input() fontWeight = 'normal';
}
