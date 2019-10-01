import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <div>
      <h2>Tech Events</h2>
      <img src="assets/images/basic-shield.png">
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ngFund';
}
