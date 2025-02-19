import { TestBed } from '@angular/core/testing';

import { backendApiService } from './backend-api.service';

describe('BackendApiService', () => {
  let service: backendApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(backendApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
