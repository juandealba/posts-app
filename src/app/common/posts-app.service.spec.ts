import { TestBed, inject } from '@angular/core/testing';

import { PostsAppService } from './posts-app.service';

describe('PostsAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsAppService]
    });
  });

  it('should be created', inject([PostsAppService], (service: PostsAppService) => {
    expect(service).toBeTruthy();
  }));
});
