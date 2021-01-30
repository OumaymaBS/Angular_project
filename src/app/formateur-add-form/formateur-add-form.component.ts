import { Component, OnInit } from '@angular/core';
import { FakeformateurService } from '../fakeformateur.service';

@Component({
  selector: 'app-formateur-add-form',
  templateUrl: './formateur-add-form.component.html',
  styleUrls: ['./formateur-add-form.component.css']
})
export class FormateurAddFormComponent implements OnInit {
  
  constructor(private formateurService: FakeformateurService) { }

  ngOnInit(): void {
  }
  addFormateur(formator) {
    console.log(formator);
    this.formateurService.add(formator);
   
}

}
