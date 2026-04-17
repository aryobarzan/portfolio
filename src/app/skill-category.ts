export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  url: string;
  level: 'low' | 'med' | 'high';
}
