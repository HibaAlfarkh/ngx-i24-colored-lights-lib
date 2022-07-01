import { TestBed } from '@angular/core/testing';

import { NgxI24ColoredLightsService } from './ngx-i24-colored-lights.service';

describe('NgxI24ColoredLightsService', () => {
  let service: NgxI24ColoredLightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxI24ColoredLightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
