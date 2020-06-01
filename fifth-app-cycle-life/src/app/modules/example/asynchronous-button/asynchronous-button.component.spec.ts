import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousButtonComponent } from './asynchronous-button.component';

describe('AsynchronousButtonComponent', () => {
  let component: AsynchronousButtonComponent;
  let fixture: ComponentFixture<AsynchronousButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynchronousButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronousButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
