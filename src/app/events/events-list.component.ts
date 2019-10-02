import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
  <div>
    <h1>Upcoming Tech Events</h1>
    <hr>
    <app-event-thumbnail  (eventClicked)="handleEventClicked($event)" [event]="event1"></app-event-thumbnail>
  </div>
  `,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'Johannesburg',
      country: 'South Africa'
    }
  };

  handleEventClicked(data: any) {
    console.log('received: ', data);
  }

  constructor() { }

  ngOnInit() {
  }

}
