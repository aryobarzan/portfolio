import { Component, inject } from '@angular/core';
import { SkillService } from '../skill.service';
import { SkillCategory } from '../skill-category';
import { SkillCategoryCard } from '../skill-category-card/skill-category-card';
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
