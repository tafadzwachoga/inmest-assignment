import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceInnerComponent } from './attendance-inner.component';

describe('AttendanceInnerComponent', () => {
  let component: AttendanceInnerComponent;
  let fixture: ComponentFixture<AttendanceInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceInnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendanceInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
