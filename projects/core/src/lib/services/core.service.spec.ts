import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

describe('CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreService = TestBed.inject(CoreService);
    expect(service).toBeTruthy();
  });
});
