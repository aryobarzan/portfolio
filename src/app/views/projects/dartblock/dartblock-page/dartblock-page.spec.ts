import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartblockPage } from './dartblock-page';

describe('DartblockPage', () => {
  let component: DartblockPage;
  let fixture: ComponentFixture<DartblockPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DartblockPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DartblockPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
