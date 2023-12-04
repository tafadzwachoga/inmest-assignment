import { TestBed } from '@angular/core/testing';

import { AttendanceRegisterService } from './attendance-register.service';

describe('AttendanceRegisterService', () => {
  let service: AttendanceRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
