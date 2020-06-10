import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroesComponent } from './dashboard-heroes.component';

describe('DashboardHeroesComponent', () => {
  let component: DashboardHeroesComponent;
  let fixture: ComponentFixture<DashboardHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
