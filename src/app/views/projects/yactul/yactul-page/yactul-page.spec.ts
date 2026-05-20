import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YactulPage } from './yactul-page';

describe('YactulPage', () => {
  let component: YactulPage;
  let fixture: ComponentFixture<YactulPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YactulPage],
    }).compileComponents();

    fixture = TestBed.createComponent(YactulPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
