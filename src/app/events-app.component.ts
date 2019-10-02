import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <app-navbar></app-navbar>
    <app-events-list></app-events-list>
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ngFund';
}
