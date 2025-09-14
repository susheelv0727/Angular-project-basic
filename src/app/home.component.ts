import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Welcome</h2>
    <p>This demo shows: standalone components, reactive forms, routing, OnPush, and observables.</p>
  `
})
export class HomeComponent {}
