import { Component, Input, OnInit } from '@angular/core';
import { FakeformateurService } from '../fakeformateur.service';
@Component({
  selector: 'app-formateur-form',
  templateUrl: './formateur-form.component.html',
  styleUrls: ['./formateur-form.component.css']
})
export class FormateurFormComponent implements OnInit {
  @Input() formateur: any;
  constructor(private formateurService: FakeformateurService) { }
  formators;
  ngOnInit(): void {
    this.formators= this.formateurService.get();
  }


}
