import { TestBed } from '@angular/core/testing';

import { AervicedemoService } from './aervicedemo.service';

describe('AervicedemoService', () => {
  let service: AervicedemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AervicedemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
