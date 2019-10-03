import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ngFund';
}
