import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  id: number;
  date_created: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Emily Fiagbedze', date_created: '27/03/2023', position: 'super admin'},
  {id: 2, name: 'Victor Atinyo', date_created: '27/03/2023', position: 'admin'},
  {id: 3, name: 'Daniel Narh', date_created: '27/03/2023', position: 'staff'},
  {id: 4, name: 'Samson Were', date_created: '27/03/2023', position: 'EIT'},
  {id: 5, name: 'Chef Vinyl', date_created: '27/03/2023', position: 'staff'},
  {id: 6, name: 'Keziah Keziah', date_created: '27/03/2023', position: 'staff'},
  {id: 7, name: 'Bright Ahedor', date_created: '27/03/2023', position: 'staff'},
  {id: 8, name: 'Daniel Narh', date_created: '27/03/2023', position: 'staff'},
  {id: 9, name: 'Lady O', date_created: '27/03/2023', position: 'staff'},
  {id: 10, name: 'Afi Ohui K.', date_created: '27/03/2023', position: 'staff'},
];

@Component({
  selector: 'app-settings-user-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './settings-user-table.component.html',
  styleUrl: './settings-user-table.component.scss'
})
export class SettingsUserTableComponent {
  displayedColumns: string[] = ['id', 'name', 'date_created', 'position'];
  dataSource = ELEMENT_DATA;
}
