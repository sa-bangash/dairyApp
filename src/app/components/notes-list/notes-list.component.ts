import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import INote from 'src/app/notes.model';
import { NotesService } from 'src/app/services/notes/notes.service';
import { NoteFormComponent } from '../note-form/note-form.component';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  list: Array<INote> = [];
  constructor(private noteService: NotesService, public dialog: MatDialog) {
    this.list = this.noteService.fetchAll();
  }

  ngOnInit(): void {
    this.onAddNote();
  }

  onAddNote(): void {
    this.dialog.open(NoteFormComponent, {
      width: '80%',
    });
  }
}
