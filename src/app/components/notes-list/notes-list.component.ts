import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import INote from 'src/app/models/notes.model';
import { NotesService } from 'src/app/services/notes/notes.service';
import { NoteFormComponent } from '../note-form/note-form.component';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  list: Array<INote> = [];
  dateFilter = new FormControl();
  constructor(private noteService: NotesService, public dialog: MatDialog) {
    this.dateFilter.valueChanges.pipe(
      startWith('')
    ).subscribe((date) => {
      console.log(date, this.noteService.fetchAll(date));
      this.list = this.noteService.fetchAll(date);
    })
  }

  ngOnInit(): void {
    // this.onAddNote();
  }

  onAddNote(): void {
    this.dialog.open(NoteFormComponent, {
      width: '80%',
    });
  }
  onExportAsJson(): void {

  }
}
