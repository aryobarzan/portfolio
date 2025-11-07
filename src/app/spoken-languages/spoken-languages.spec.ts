import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokenLanguages } from './spoken-languages';

describe('Languages', () => {
  let component: SpokenLanguages;
  let fixture: ComponentFixture<SpokenLanguages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpokenLanguages],
    }).compileComponents();

    fixture = TestBed.createComponent(SpokenLanguages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
