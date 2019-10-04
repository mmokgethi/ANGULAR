import { Component, OnInit } from '@angular/core';
import { EventService } from '../events/shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { Ievent } from './shared/index';

declare let toastr;

@Component({
  template: `
    <div>
      <h1>Upcoming Tech Events</h1>
      <hr>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <app-event-thumbnail (click)="handleThumbnailEventClick(event.name)" [event]="event"></app-event-thumbnail>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: Ievent[];
  constructor(private eventService: EventService, private toastr: ToastrService,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailEventClick(eventName) {
    this.toastr.success(eventName);
  }

}
