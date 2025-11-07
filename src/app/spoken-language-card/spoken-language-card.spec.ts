import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokenLanguageCard } from './spoken-language-card';

describe('SpokenLanguageCard', () => {
  let component: SpokenLanguageCard;
  let fixture: ComponentFixture<SpokenLanguageCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpokenLanguageCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpokenLanguageCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
