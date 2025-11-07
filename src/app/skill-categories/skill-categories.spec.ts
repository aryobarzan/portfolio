import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCategories } from './skill-categories';

describe('Skills', () => {
  let component: SkillCategories;
  let fixture: ComponentFixture<SkillCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCategories],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
