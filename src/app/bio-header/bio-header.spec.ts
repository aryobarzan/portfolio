import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioHeader } from './bio-header';

describe('BioHeader', () => {
  let component: BioHeader;
  let fixture: ComponentFixture<BioHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
