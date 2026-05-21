import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsPage } from './publications-page';

describe('Publications', () => {
  let component: PublicationsPage;
  let fixture: ComponentFixture<PublicationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
