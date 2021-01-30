import { Component, OnInit } from '@angular/core';
import { Session } from 'inspector';
import { SESSIONITEMS } from '../admin/sessions';
import { FORMATEURS } from '../formateurs';
import { PARTICIPANTS } from '../participants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nbs=SESSIONITEMS.length;
  nbp=PARTICIPANTS.length;
  nbf=FORMATEURS.length;
  constructor() { }

  ngOnInit(): void {
  }
}
