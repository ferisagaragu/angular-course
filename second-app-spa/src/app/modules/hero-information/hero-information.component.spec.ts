import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInformationComponent } from './hero-information.component';

describe('HeroInformationComponent', () => {
  let component: HeroInformationComponent;
  let fixture: ComponentFixture<HeroInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
