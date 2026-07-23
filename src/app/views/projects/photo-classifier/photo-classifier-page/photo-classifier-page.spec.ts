import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoClassifierPage } from './photo-classifier-page';

describe('PhotoClassifierPage', () => {
  let component: PhotoClassifierPage;
  let fixture: ComponentFixture<PhotoClassifierPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoClassifierPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoClassifierPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
