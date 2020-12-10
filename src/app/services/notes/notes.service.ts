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
    imageUrl: 'https://scontent.fpew3-1.fna.fbcdn.net/v/t1.0-1/p480x480/26239199_949372878548131_4224877183970466593_n.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=pzKWM5eCZwgAX85B9vG&_nc_ht=scontent.fpew3-1.fna&tp=6&oh=e9a0c2ed8c9ba942656f5722fe242558&oe=5FF7D4B4',
    videoUrl: 'https://youtu.be/QZMf2zkKoF8',
  },
  {
    id: 2,
    text: 'second note',
    date: addDays(new Date(), 3),
    imageUrl: 'https://scontent.fpew3-1.fna.fbcdn.net/v/t1.0-1/p480x480/26239199_949372878548131_4224877183970466593_n.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=pzKWM5eCZwgAX85B9vG&_nc_ht=scontent.fpew3-1.fna&tp=6&oh=e9a0c2ed8c9ba942656f5722fe242558&oe=5FF7D4B4',
    videoUrl: 'https://youtu.be/QZMf2zkKoF8',

  }];
  constructor() { }

  fetchAll(date?: Date): Array<INote> {
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
