import { TestBed } from '@angular/core/testing';

import { ItSupportService } from './it-support.service';

describe('ItSupportService', () => {
  let service: ItSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
