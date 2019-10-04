import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { Ievent } from '../shared/index';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: Ievent;

  constructor(private evntService: EventService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.evntService.getEvent(
      +this.activateRoute.snapshot.params.id);
  }

}
