import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeParticipantService } from '../fake-participant.service';

@Component({
  selector: 'app-participant-edit-form',
  templateUrl: './participant-edit-form.component.html',
  styleUrls: ['./participant-edit-form.component.css']
})
export class ParticipantEditFormComponent implements OnInit {
  id;
  private sub: any;
  participant:any;
  constructor(private route: ActivatedRoute,private partService: FakeParticipantService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      });
      console.log('Participant ID ' + this.id.toString());
      this.participant = this.partService.getParticipant(this.id);
  }


  editParticipant(part) {
  console.log(part);
  }

}
