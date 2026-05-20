import { Routes } from '@angular/router';
import { Dartblock } from './dartblock/dartblock';
import { Projects } from './projects/projects';
import { WorkExperiences } from './work-experiences/work-experiences';
import { Publications } from './publications/publications';
import { BioHeader } from './bio-header/bio-header';
import { BeaconQ } from './views/projects/beacon-q/beacon-q';
import { YactulPage } from './views/projects/yactul/yactul-page/yactul-page';
import { SketchnotingPage } from './views/projects/sketchnoting/sketchnoting-page/sketchnoting-page';
import { DartblockPage } from './views/projects/dartblock/dartblock-page/dartblock-page';
import { GridlockPage } from './views/projects/gridlock/gridlock-page/gridlock-page';

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
  // Projects
  { path: 'projects/gridlock', component: GridlockPage },
  { path: 'projects/beaconq', component: BeaconQ },
  { path: 'projects/dartblock', component: DartblockPage },
  { path: 'projects/sketchnoting', component: SketchnotingPage },
  { path: 'projects/yactul', component: YactulPage },
];
