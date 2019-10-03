import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/event.service';

@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>Upcoming Tech Events</h1>
      <hr>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <app-event-thumbnail [event]="event"></app-event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
   }

  ngOnInit() {
    this.events = this.eventService.getEvents(); 
  }

}
