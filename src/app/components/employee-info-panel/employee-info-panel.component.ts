import { Component, Input } from '@angular/core';
import { UiTextComponent } from '../ui/ui-text/ui-text.component';
import { InfoCardComponent } from '../shared/info-card/info-card.component';

@Component({
  selector: 'app-employee-info-panel',
  standalone: true,
  imports: [UiTextComponent, InfoCardComponent],
  templateUrl: './employee-info-panel.component.html',
  styleUrl: './employee-info-panel.component.scss'
})
export class EmployeeInfoPanelComponent {
    @Input() name: string = '';
    @Input() number: string = '';
    @Input() team: string = '';
    @Input() totalEarnings: string = '';
    @Input() totalDeductions: string = '';
    @Input() netTotal: string = '';
    @Input() uif: string = '';
    @Input() paye: string = '';
    @Input() totalContributions: string = '';
}
