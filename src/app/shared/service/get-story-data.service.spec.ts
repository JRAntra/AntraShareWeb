import { TestBed } from '@angular/core/testing';

import { GetStoryDataService } from './get-story-data.service';

describe('GetStoryDataService', () => {
  let service: GetStoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
