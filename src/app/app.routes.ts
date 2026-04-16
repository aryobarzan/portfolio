import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dartblock } from './dartblock/dartblock';
import { Projects } from './projects/projects';
import { Education } from './education/education';
import { WorkExperiences } from './work-experiences/work-experiences';
import { SkillCategories } from './skill-categories/skill-categories';
import { Publications } from './publications/publications';
import { BioHeader } from './bio-header/bio-header';

export const routes: Routes = [
  {
    path: '',
    component: BioHeader,
  },
  {
    path: 'dartblock',
    component: Dartblock,
  },
  { path: 'home', component: BioHeader },
  { path: 'projects', component: Projects },
  { path: 'education', component: Education },
  { path: 'experience', component: WorkExperiences },
  { path: 'skills', component: SkillCategories },
  { path: 'publications', component: Publications },
];
