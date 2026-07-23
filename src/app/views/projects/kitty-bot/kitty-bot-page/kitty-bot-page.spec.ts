import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyBotPage } from './kitty-bot-page';

describe('KittyBotPage', () => {
  let component: KittyBotPage;
  let fixture: ComponentFixture<KittyBotPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KittyBotPage],
    }).compileComponents();

    fixture = TestBed.createComponent(KittyBotPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
