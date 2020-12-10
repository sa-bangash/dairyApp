import { Component, Input, OnInit } from '@angular/core';
import INote from 'src/app/models/notes.model';

@Component({
  selector: 'app-noteitem',
  templateUrl: './noteitem.component.html',
  styleUrls: ['./noteitem.component.css']
})
export class NoteitemComponent implements OnInit {
  @Input()
  data: INote;
  constructor() { }

  ngOnInit(): void {
  }

}
