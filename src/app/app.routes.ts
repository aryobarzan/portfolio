import { Routes } from '@angular/router';
import { Dartblock } from './dartblock/dartblock';
import { Projects } from './projects/projects';
import { WorkExperiences } from './work-experiences/work-experiences';
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
  { path: 'experience', component: WorkExperiences },
  { path: 'publications', component: Publications },
];
