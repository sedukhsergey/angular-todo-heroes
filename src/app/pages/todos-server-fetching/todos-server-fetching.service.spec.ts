import { TestBed } from '@angular/core/testing';

import { TodosServerFetchingService } from './todos-server-fetching.service';

describe('TodosServerFetchingService', () => {
  let service: TodosServerFetchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosServerFetchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
