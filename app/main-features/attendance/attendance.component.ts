import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance/attendance.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit{
  attendance : any[]  = [];
   constructor(
    private attendanceService: AttendanceService
  ){
    
  }
  ngOnInit(): void {
    this.getAttendance()
    console.log(this.attendance)
  }

  getAttendance(){
    this.attendanceService.getAttendance().subscribe((resp:any)=>{
       this.attendance = resp
    })
  }
}
