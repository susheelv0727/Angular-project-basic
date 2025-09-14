import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'form',
    loadComponent: () =>
      import('./form.component').then(m => m.FormComponent)
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./users.component').then(m => m.UsersComponent)
  },
  { path: '**', redirectTo: '' }
];
