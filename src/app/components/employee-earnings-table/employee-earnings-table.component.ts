import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface Item {
  name: string;
  description: string;
  group: string;
  quantity: number;
  price: number | null;
}

@Component({
  selector: 'app-employee-earnings-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-earnings-table.component.html',
  styleUrls: ['./employee-earnings-table.component.scss']
})
export class EmployeeEarningsTableComponent {
	@Input() items: Item[] = [];
	sortColumn: keyof Item | '' = '';
	sortDirection: 'asc' | 'desc' = 'asc';

	upArrowIcon = '../../../assets/icons/ic-arrow-up.svg';
	downArrowIcon = '../../../assets/icons/ic-arrow-down.svg';

	sortData(column: keyof Item): void {
		// If already filtered on column just change desc or asc
		if (this.sortColumn === column) {
			this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			this.sortColumn = column;
			this.sortDirection = 'asc';
		}

		this.items = this.items.sort((a, b) => {
			let valueA = a[column];
			let valueB = b[column];

			if (valueA === null && valueB !== null) return this.sortDirection === 'asc' ? -1 : 1;
			if (valueA !== null && valueB === null) return this.sortDirection === 'asc' ? 1 : -1;
			if (valueA === null && valueB === null) return 0;

			if (typeof valueA === 'string' && typeof valueB === 'string') {
				valueA = valueA.toLowerCase();
				valueB = valueB.toLowerCase();
			}

			if (this.sortDirection === 'asc') {
				return (valueA as any) > (valueB as any) ? 1 : -1;
			} else {
				return (valueA as any) < (valueB as any) ? 1 : -1;
			}
		});
	}
}
