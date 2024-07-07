import { Component } from '@angular/core';
import { EmployeeInfoPanelComponent } from '../../employee-info-panel/employee-info-panel.component';
import { EmployeeEarningsTableComponent } from '../../employee-earnings-table/employee-earnings-table.component';
import { UiInputComponent } from '../../ui/ui-input/ui-input.component';
import { UiButtonComponent } from '../../ui/ui-button/ui-button.component';
import data from '../../../../../data.json';

interface EmployeeData {
	name: string;
	number: string;
	team: string;
	total_earnings: string;
	total_deductions: string;
	net_total: string;
	uif: string;
	paye: string;
	total_contributions: string;
	items: Item[];
  }
  
  interface Item {
	name: string;
	description: string;
	group: string;
	quantity: number;
	price: number | null;
  }

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [EmployeeInfoPanelComponent, EmployeeEarningsTableComponent, UiInputComponent, UiButtonComponent],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})

export class PayrollComponent {
	employeeData: any = data;
	filteredItems: any[] = this.employeeData.items;

	ngOnInit(): void {
	  console.log(this.employeeData); // For debugging purposes
	}

	onSearchChange(searchValue: string): void {
		searchValue = searchValue.toLowerCase()
		console.log(searchValue)

		this.filteredItems = this.employeeData.items.filter((item: Item) => 
		  item.name.toLowerCase().includes(searchValue) ||
		  item.description.toLowerCase().includes(searchValue) ||
		  item.group.toLowerCase().includes(searchValue)
		);

		console.log(this.filteredItems)
	  }
}
