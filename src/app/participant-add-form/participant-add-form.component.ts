import { Component, OnInit } from '@angular/core';
import { FakeParticipantService } from '../fake-participant.service';

@Component({
  selector: 'app-participant-add-form',
  templateUrl: './participant-add-form.component.html',
  styleUrls: ['./participant-add-form.component.css']
})
export class ParticipantAddFormComponent implements OnInit {

  constructor(private partService: FakeParticipantService) { }

  ngOnInit(): void {
  }
  addParticipant(part) {
    console.log(part);
    this.partService.add(part);
   
}

}
