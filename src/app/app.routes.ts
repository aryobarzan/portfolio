import { Routes } from '@angular/router';
import { Dartblock } from './views/projects/dartblock/dartblock-demo/dartblock';
import { WorkExperiences } from './views/experience/work-experiences/work-experiences';
import { BioHeader } from './views/bio-header/bio-header';
import { YactulPage } from './views/projects/yactul/yactul-page/yactul-page';
import { SketchnotingPage } from './views/projects/sketchnoting/sketchnoting-page/sketchnoting-page';
import { DartblockPage } from './views/projects/dartblock/dartblock-page/dartblock-page';
import { GridlockPage } from './views/projects/gridlock/gridlock-page/gridlock-page';
import { GridLockPrivacyPolicyPage } from './views/projects/gridlock/privacy-policy/privacy-policy';
import { BeaconQPage } from './views/projects/beacon-q/beacon-q-page/beacon-q-page';
import { PublicationsPage } from './views/publications/publications-page/publications-page';
import { ProjectsPage } from './views/projects/projects-page/projects-page';

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
  { path: 'projects', component: ProjectsPage },
  { path: 'experience', component: WorkExperiences },
  { path: 'publications', component: PublicationsPage },
  // Projects
  { path: 'projects/gridlock', component: GridlockPage },
  { path: 'projects/beaconq', component: BeaconQPage },
  { path: 'projects/dartblock', component: DartblockPage },
  { path: 'projects/sketchnoting', component: SketchnotingPage },
  { path: 'projects/yactul', component: YactulPage },
  {
    path: 'gridlock/privacy-policy',
    component: GridLockPrivacyPolicyPage,
  },
];
