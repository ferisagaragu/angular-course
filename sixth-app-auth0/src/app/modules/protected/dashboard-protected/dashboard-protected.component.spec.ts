import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProtectedComponent } from './dashboard-protected.component';

describe('DashboardProtectedComponent', () => {
  let component: DashboardProtectedComponent;
  let fixture: ComponentFixture<DashboardProtectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProtectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
