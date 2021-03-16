import { TestBed } from '@angular/core/testing';

import { HeroesServerService } from './heroes-server.service';

describe('HeroesServerService', () => {
  let service: HeroesServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
