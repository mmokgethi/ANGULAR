import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: any;
  
  constructor(private evntService: EventService) { }

  ngOnInit() {
    this.event = this.evntService.getEvent(1);
  }

}
