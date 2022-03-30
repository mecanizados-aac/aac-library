import { TestBed } from '@angular/core/testing';

import { AacLibraryService } from './aac-library.service';

describe('AacLibraryService', () => {
  let service: AacLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AacLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
