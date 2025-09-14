import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>Angular Interview Demo</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active" 
         [routerLinkActiveOptions]="{exact: true}">Home</a> |
      <a routerLink="/form" routerLinkActive="active">Form</a> |
      <a routerLink="/users" routerLinkActive="active">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
    nav a.active { font-weight: bold; }
    nav { margin-bottom: 1rem; display: block; }
  `,
  ],
})
export class AppComponent {}
