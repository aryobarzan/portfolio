import { Component, inject } from '@angular/core';
import { SkillService } from '../skill.service';
import { SkillCategory } from '../skill-category';
import { SkillCategoryCard } from '../skill-category-card/skill-category-card';
@Component({
  selector: 'app-skills',
  imports: [SkillCategoryCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillService: SkillService = inject(SkillService);
  skillCategories: SkillCategory[] = [];

  constructor() {
    this.skillCategories = this.skillService.skillCategories;
  }
}
