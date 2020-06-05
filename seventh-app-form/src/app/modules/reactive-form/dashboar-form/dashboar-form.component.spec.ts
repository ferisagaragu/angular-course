import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarFormComponent } from './dashboar-form.component';

describe('DashboarFormComponent', () => {
  let component: DashboarFormComponent;
  let fixture: ComponentFixture<DashboarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
