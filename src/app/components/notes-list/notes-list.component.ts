import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import INote from 'src/app/models/notes.model';
import { NotesService } from 'src/app/services/notes/notes.service';
import { NoteFormComponent } from '../note-form/note-form.component';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class NotesListComponent implements OnInit {
  list: Array<INote> = [];
  dateFilter = new FormControl();
  constructor(private noteService: NotesService, public dialog: MatDialog) {
    this.dateFilter.valueChanges.pipe(
      startWith('')
    ).subscribe((date) => {
      this.list = this.noteService.fetchAll(date);
    });
  }

  ngOnInit(): void {
    // this.onAddNote();
  }

  onAddNote(): void {
    this.dialog.open(NoteFormComponent, {
      width: '50%',
    });
  }
  onExportAsJson(): void {

  }

  clearStartDate(): void {
    this.dateFilter.setValue(null);
  }
}
