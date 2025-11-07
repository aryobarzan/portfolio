import { Component, Input } from '@angular/core';
import { SkillCategory } from '../skill-category';
@Component({
  selector: 'app-skill-category-card',
  imports: [],
  templateUrl: './skill-category-card.html',
  styleUrl: './skill-category-card.css',
})
export class SkillCategoryCard {
  @Input({ required: true }) skillCategory!: SkillCategory;
}
