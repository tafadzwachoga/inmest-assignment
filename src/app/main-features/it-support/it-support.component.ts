import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItSupportService } from '../../services/it-support/it-support.service';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-leaves',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatCardModule, MatIconModule],
  templateUrl: './it-support.component.html',
  styleUrl: './it-support.component.scss'
})
export class ItSupportComponent implements OnInit {
  incidents: any[] = [];
// displayedColumns: any;
displayedColumns: string[] = ['id', 'eitID', 'state', 'description', 'category', 'action'];
  dataSource = this.incidents

  constructor(
    private itSupportService: ItSupportService
  ){}

ngOnInit(): void {
  this.getMyIncidents();
}
  getMyIncidents() {
    this.itSupportService.getIncidents().subscribe((res: any) => {
      this.incidents = res;
    } ) }
}
