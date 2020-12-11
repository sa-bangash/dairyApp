import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import INote from 'src/app/models/notes.model';
import { NotesService } from 'src/app/services/notes/notes.service';
import { NoteFormComponent } from '../note-form/note-form.component';
import { startWith } from 'rxjs/operators';
import { downloadObjectAsJson } from 'src/app/common/utils';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit, OnDestroy {
  list: Array<INote> = [];
  dateFilter = new FormControl();
  private destory: Unsubscribable;
  constructor(private service: NotesService, public dialog: MatDialog) {
    this.destory = this.dateFilter.valueChanges.pipe(
      startWith('')
    ).subscribe((date) => {
      this.list = this.service.fetchAll(date);
    });
  }

  ngOnInit(): void {
  }

  onAddNote(): void {
    this.dialog.open(NoteFormComponent, {
      minWidth: '50%',
    });
  }

  onExportAsJson(): void {
    downloadObjectAsJson(this.service.fetchAll(), 'dairy');
  }

  clearStartDate(): void {
    this.dateFilter.setValue(null);
  }

  ngOnDestroy(): void {
    if (this.destory) {
      this.destory.unsubscribe();
    }
  }
}
