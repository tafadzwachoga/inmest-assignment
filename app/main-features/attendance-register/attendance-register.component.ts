import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AttendanceRegisterService } from '../../services/attendance-register/attendance-register.service';

@Component({
  selector: 'app-leaves',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './attendance-register.component.html',
  styleUrl: './attendance-register.component.scss'
})
export class AttendanceRegisterComponent implements OnInit {
  attendance: any[] = [];

  constructor(
    private attendanceRegisterService: AttendanceRegisterService
  ){}

ngOnInit(): void {
  this.getAttendanceRecords();
}
  getAttendanceRecords() {
    this.attendanceRegisterService.getAttendanceRecords().subscribe((resp: any) => {
      this.attendance = resp;
    });
  }
}
