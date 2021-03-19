import { TestBed } from '@angular/core/testing';

import { HeroesPaginationService } from './heroes-pagination.service';

describe('HeroesPaginationService', () => {
  let service: HeroesPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
