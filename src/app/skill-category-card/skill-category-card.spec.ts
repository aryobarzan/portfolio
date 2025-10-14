import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCategoryCard } from './skill-category-card';

describe('SkillCategoryCard', () => {
  let component: SkillCategoryCard;
  let fixture: ComponentFixture<SkillCategoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCategoryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCategoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
