import { Injectable } from '@angular/core';
import { FORMATEURS } from './formateurs';

@Injectable({
  providedIn: 'root'
})
export class FakeformateurService {

  constructor() { }
  get(){return FORMATEURS;}

  add(formator){
    formator.id = FORMATEURS.length + 1;
    FORMATEURS.push(formator);
  }

  delete(formator) {
    let index;
    index = FORMATEURS.indexOf(formator);
    if (FORMATEURS.indexOf(formator) >= 0) {
      FORMATEURS.splice(index, 1);
    }
    }

    getFormateur(id: number) {
      return FORMATEURS[id - 1];
      }
}
