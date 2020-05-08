import { TestBed } from '@angular/core/testing';

import { ApolloViewerService } from './apollo-viewer.service';

describe('ApolloViewerService', () => {
  let service: ApolloViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApolloViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
