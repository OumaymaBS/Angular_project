import { Component, Input, OnInit } from '@angular/core';
import { FakeformateurService } from '../fakeformateur.service';

@Component({
  selector: 'app-formateurs-list',
  templateUrl: './formateurs-list.component.html',
  styleUrls: ['./formateurs-list.component.css']
})
export class FormateursListComponent implements OnInit {
  @Input() formateur: any;
  formators;
  constructor(private formateurService: FakeformateurService) { }

  ngOnInit(): void {
    this.formators= this.formateurService.get();
  }
  onDelete()
  {
  this.formateurService.delete(this.formateur);
  }
}
