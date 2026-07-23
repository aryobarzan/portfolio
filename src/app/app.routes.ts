import { Routes } from '@angular/router';
import { Dartblock } from './views/projects/dartblock/dartblock-demo/dartblock';
import { WorkExperiences } from './views/experience/work-experiences/work-experiences';
import { ProfilePage } from './views/profile-page/profile-page';
import { YactulPage } from './views/projects/yactul/yactul-page/yactul-page';
import { SketchnotingPage } from './views/projects/sketchnoting/sketchnoting-page/sketchnoting-page';
import { DartblockPage } from './views/projects/dartblock/dartblock-page/dartblock-page';
import { GridlockPage } from './views/projects/gridlock/gridlock-page/gridlock-page';
import { GridLockPrivacyPolicyPage } from './views/projects/gridlock/privacy-policy/privacy-policy';
import { BeaconQPage } from './views/projects/beacon-q/beacon-q-page/beacon-q-page';
import { PublicationsPage } from './views/publications/publications-page/publications-page';
import { ProjectsPage } from './views/projects/projects-page/projects-page';
import { KittyBotPage } from './views/projects/kitty-bot/kitty-bot-page/kitty-bot-page';
import { PhotoClassifierPage } from './views/projects/photo-classifier/photo-classifier-page/photo-classifier-page';

export const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'dartblock',
    component: Dartblock,
  },
  { path: 'home', component: ProfilePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'experience', component: WorkExperiences },
  { path: 'publications', component: PublicationsPage },
  // Projects
  { path: 'projects/gridlock', component: GridlockPage },
  { path: 'projects/photo-classifier', component: PhotoClassifierPage },
  { path: 'projects/beaconq', component: BeaconQPage },
  { path: 'projects/dartblock', component: DartblockPage },
  { path: 'projects/sketchnoting', component: SketchnotingPage },
  { path: 'projects/yactul', component: YactulPage },
  { path: 'projects/kitty-bot', component: KittyBotPage },
  {
    path: 'gridlock/privacy-policy',
    component: GridLockPrivacyPolicyPage,
  },
];
