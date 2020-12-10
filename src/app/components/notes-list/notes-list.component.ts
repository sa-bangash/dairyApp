import { Component, OnInit } from '@angular/core';
import INote from 'src/app/notes.model';
import { NotesService } from 'src/app/services/notes/notes.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  list: Array<INote> = [];
  constructor(private noteService: NotesService) {
    this.list = this.noteService.fetchAll();
  }

  ngOnInit(): void {
  }

}
