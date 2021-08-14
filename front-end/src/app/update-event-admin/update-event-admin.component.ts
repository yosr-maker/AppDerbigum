import { UserComponent } from './../user/user.component';
import { EventService } from './../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../entity/event';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-event-admin',
  templateUrl: './update-event-admin.component.html',
  styleUrls: ['./update-event-admin.component.css']
})
export class UpdateEventAdminComponent implements OnInit {

  event: Event;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.event = UserComponent.event;
  }

  updateEvent() {
    this.eventService.updateEvent(this.event).subscribe(res => {

        Swal.fire({
          type: 'success',
          html: 'Votre  event a été modifié !',
        })
        
    });
  }
}
