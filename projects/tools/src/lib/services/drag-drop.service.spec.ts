import { TestBed } from '@angular/core/testing';

import { DragDropService } from './drag-drop.service';

describe('DragDropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragDropService = TestBed.inject(DragDropService);
    expect(service).toBeTruthy();
  });
});
