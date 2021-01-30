import { Injectable } from '@angular/core';
import { PARTICIPANTS } from './participants';

@Injectable({
  providedIn: 'root'
})
export class FakeParticipantService {

  constructor() { }
  get(){
    return PARTICIPANTS;
  }

  add(part){
    part.id = PARTICIPANTS.length + 1;
    PARTICIPANTS.push(part);
  }

  delete(part) {
    let index;
    index = PARTICIPANTS.indexOf(part);
    if (PARTICIPANTS.indexOf(part) >= 0) {
      PARTICIPANTS.splice(index, 1);
    }
    }

    getParticipant(id: number) {
      return PARTICIPANTS[id - 1];
      }
}
