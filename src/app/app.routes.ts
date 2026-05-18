import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dartblock } from './dartblock/dartblock';
import { GridLockPrivacyPolicyPage } from './views/projects/gridlock/privacy-policy/privacy-policy';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'dartblock',
    component: Dartblock,
  },
  {
    path: 'gridlock/privacy-policy',
    component: GridLockPrivacyPolicyPage,
  },
];
