import { Component, Input, OnInit } from '@angular/core';
import { FakeParticipantService } from '../fake-participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  @Input() participant: any;
  parts;
  constructor(private partService: FakeParticipantService) { }

  ngOnInit(): void {
    this.parts= this.partService.get();
  }
  onDelete()
  {
  this.partService.delete(this.participant);
  }
}
