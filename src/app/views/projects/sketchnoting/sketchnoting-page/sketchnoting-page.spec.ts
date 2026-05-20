import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchnotingPage } from './sketchnoting-page';

describe('SketchnotingPage', () => {
  let component: SketchnotingPage;
  let fixture: ComponentFixture<SketchnotingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SketchnotingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SketchnotingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
