import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dartblock } from './dartblock/dartblock';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'dartblock',
    component: Dartblock,
  },
];
