import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import INote from 'src/app/models/notes.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteitemComponent implements OnInit {
  @Input()
  data: INote;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
