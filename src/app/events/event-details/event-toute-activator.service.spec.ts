import { TestBed } from '@angular/core/testing';

import { EventTouteActivatorService } from './event-toute-activator.service';

describe('EventTouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventTouteActivatorService = TestBed.get(EventTouteActivatorService);
    expect(service).toBeTruthy();
  });
});
