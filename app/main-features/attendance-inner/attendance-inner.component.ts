import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance/attendance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance-inner',
  standalone: true,
  imports: [],
  templateUrl: './attendance-inner.component.html',
  styleUrl: './attendance-inner.component.scss',
})
export class AttendanceInnerComponent implements OnInit {
  attendanceInner: any = {};
  id: number = 0;
  constructor(private route: ActivatedRoute, private attendanceInnerService: AttendanceService) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = (params['id']);
    })
    this.getAttendanceInner();
    console.log(this.attendanceInner);
  }

  getAttendanceInner() {
    this.attendanceInnerService.getSingleAttendance(5).subscribe((resp: any) => {
      this.attendanceInner = resp;
    });
  }
}
