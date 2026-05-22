import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmGrainOverlay } from './film-grain-overlay';

describe('FilmGrainOverlay', () => {
  let component: FilmGrainOverlay;
  let fixture: ComponentFixture<FilmGrainOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmGrainOverlay],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmGrainOverlay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
