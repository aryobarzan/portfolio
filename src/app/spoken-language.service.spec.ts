import { TestBed } from '@angular/core/testing';

import { SpokenLanguageService } from './spoken-language.service';

describe('Language', () => {
  let service: SpokenLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpokenLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
