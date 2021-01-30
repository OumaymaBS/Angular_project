import { Component, Input, OnInit } from '@angular/core';
import { FakeParticipantService } from '../fake-participant.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit {
  @Input() participant: any;
  parts;
  
  constructor(private partService: FakeParticipantService) { }
  ngOnInit(): void {
    this.parts= this.partService.get();
  }
}
