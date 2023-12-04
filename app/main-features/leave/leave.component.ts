import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../material/material.module';



@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterLink, MatTabsModule, MatTableModule, MatCardModule, MaterialModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class LeaveComponent implements OnInit {
  dataSource :any;
  displayedColumns:string [] = [];
  leaves: any[] = [];
  requestsTotal : any;

  constructor(
    private leaveService: LeaveService
  ){}

  getLeaves() {
    this.leaveService.getLeaves().subscribe((response:any) => {
      this.leaves = response;
    })
  }

  getApprovedLeaves() {
      this.leaveService.getApprovedLeaves().subscribe((response:any) => {
        console.log(response)
        this.requestsTotal = response;
      })
  }

  ngOnInit(): void {
      this.getLeaves();
      this.getApprovedLeaves();
      this.displayedColumns = ['id', 'EIT_id', 'type', 'date', 'status'];
      this.dataSource = this.leaves;
  }

}