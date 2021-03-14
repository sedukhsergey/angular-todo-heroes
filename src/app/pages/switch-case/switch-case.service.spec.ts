import { TestBed } from '@angular/core/testing';

import { SwitchCaseService } from './switch-case.service';

describe('SwitchCaseService', () => {
  let service: SwitchCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
