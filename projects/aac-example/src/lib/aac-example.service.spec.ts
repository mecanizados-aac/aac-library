import { TestBed } from '@angular/core/testing';

import { AacExampleService } from './aac-example.service';

describe('AacExampleService', () => {
  let service: AacExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AacExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
