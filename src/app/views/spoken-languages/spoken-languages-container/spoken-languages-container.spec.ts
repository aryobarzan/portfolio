import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokenLanguagesContainer } from './spoken-languages-container';

describe('Languages', () => {
  let component: SpokenLanguagesContainer;
  let fixture: ComponentFixture<SpokenLanguagesContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpokenLanguagesContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(SpokenLanguagesContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
