import { TestBed } from '@angular/core/testing';

import { ValidationFormValidator } from './validation-form.validator';

describe('ValidationFormService', () => {
  let service: ValidationFormValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationFormValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
