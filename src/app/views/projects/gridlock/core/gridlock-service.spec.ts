import { TestBed } from '@angular/core/testing';

import { GridlockService } from './gridlock-service';

describe('Gridlock', () => {
  let service: GridlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
