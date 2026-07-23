import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillCategory } from '../../../core/services/skill/skill-category';

import { SkillCategoryCard } from './skill-category-card';

describe('SkillCategoryCard', () => {
  let component: SkillCategoryCard;
  let fixture: ComponentFixture<SkillCategoryCard>;

  const mockSkillCategory: SkillCategory = {
    title: 'Languages',
    skills: [{ name: 'TypeScript', url: 'assets/images/typescript.svg', level: 'high' }],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCategoryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillCategoryCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('index', 0);
    fixture.componentRef.setInput('skillCategory', mockSkillCategory);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
