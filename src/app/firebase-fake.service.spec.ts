import { TestBed } from '@angular/core/testing';

import { FirebaseFakeService } from './firebase-fake.service';

describe('FirebaseFakeService', () => {
  let service: FirebaseFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
