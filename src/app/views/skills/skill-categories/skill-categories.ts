import { Component, inject } from '@angular/core';
import { SkillCategoryCard } from '../skill-category-card/skill-category-card';
import { SkillService } from '../../../core/services/skill/skill.service';
import { SkillCategory } from '../../../core/services/skill/skill-category';
@Component({
  selector: 'app-skills',
  imports: [SkillCategoryCard],
  templateUrl: './skill-categories.html',
  styleUrl: './skill-categories.css',
})
export class SkillCategories {
  skillService: SkillService = inject(SkillService);
  skillCategories: SkillCategory[] = [];

  constructor() {
    this.skillCategories = this.skillService.skillCategories;
  }
}
