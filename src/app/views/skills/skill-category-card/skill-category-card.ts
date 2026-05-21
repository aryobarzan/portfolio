import { Component, input } from '@angular/core';
import { SkillCategory } from '../../../core/services/skill/skill-category';

@Component({
  selector: 'app-skill-category-card',
  imports: [],
  templateUrl: './skill-category-card.html',
  styleUrl: './skill-category-card.css',
})
export class SkillCategoryCard {
  index = input.required<number>();
  skillCategory = input.required<SkillCategory>();
}
