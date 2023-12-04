import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUserTableComponent } from './settings-user-table.component';

describe('SettingsUserTableComponent', () => {
  let component: SettingsUserTableComponent;
  let fixture: ComponentFixture<SettingsUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsUserTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
