import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { ErrorsComponent } from './errors/errors.component';
import { EventTouteActivatorService } from './events/event-details/event-toute-activator.service';
import { EventsListResolverService } from './events/events-list-resolver.service';


const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent,
   canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent,
    resolve: {events: EventsListResolverService}},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventTouteActivatorService] },
  { path: '404', component: ErrorsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
