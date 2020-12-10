import { Injectable } from '@angular/core';
import INote from 'src/app/notes.model';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesList: Array<INote> = [];
  constructor() { }

  fetchAll(): Array<INote> {
    return this.notesList;
  }

  fetchByDate(): INote {
    return this.notesList.find((item) => {
      return item.date;
    });
  }

  add(note: INote): void {
    this.notesList.push(note);
  }
}
