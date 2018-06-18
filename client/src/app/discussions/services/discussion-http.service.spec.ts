import { TestBed, inject } from '@angular/core/testing';

import { DiscussionHttpService } from './discussion-http.service';

describe('DiscussionHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscussionHttpService]
    });
  });

  it('should be created', inject([DiscussionHttpService], (service: DiscussionHttpService) => {
    expect(service).toBeTruthy();
  }));
});
