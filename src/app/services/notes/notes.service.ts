import { Injectable } from '@angular/core';
import INote from 'src/app/models/notes.model';
import { addDays } from 'src/app/common/utils';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesList: Array<INote> = [{
    id: 1,
    text: 'hello',
    date: new Date(),
    imageUrl: 'some url',
    videoUrl: 'video url'
  },
  {
    id: 2,
    text: 'second note',
    date: addDays(new Date(), 3),
    imageUrl: 'seoncd url',
    videoUrl: 'video url'

  }];
  constructor() { }

  fetchAll(date: Date): Array<INote> {
    if (date) {
      return this.notesList.filter((item) => {
        return Intl.DateTimeFormat().format(item.date) === Intl.DateTimeFormat().format(date);
      });
    }
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
