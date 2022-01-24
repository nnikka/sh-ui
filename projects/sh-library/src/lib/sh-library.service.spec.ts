import { TestBed } from '@angular/core/testing';

import { ShLibraryService } from './sh-library.service';

describe('ShLibraryService', () => {
  let service: ShLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
