import { TestBed, inject } from '@angular/core/testing';

import { ArticleHttpService } from './article-http.service';

describe('ArticleHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleHttpService]
    });
  });

  it('should be created', inject([ArticleHttpService], (service: ArticleHttpService) => {
    expect(service).toBeTruthy();
  }));
});
