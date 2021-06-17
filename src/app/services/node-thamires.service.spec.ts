import { TestBed } from '@angular/core/testing';

import { NodeThamiresService } from './node-thamires.service';

describe('NodeThamiresService', () => {
  let service: NodeThamiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeThamiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
