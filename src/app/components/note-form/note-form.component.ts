import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  date = new Date();
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: NotesService, private matDialogRef: MatDialogRef<NoteFormComponent>) {
    this.form = this.fb.group({
      id: '',
      text: ['', [Validators.required]],
      imageUrl: 'https://scontent.fpew3-1.fna.fbcdn.net/v/t1.0-1/p480x480/26239199_949372878548131_4224877183970466593_n.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=pzKWM5eCZwgAX85B9vG&_nc_ht=scontent.fpew3-1.fna&tp=6&oh=e9a0c2ed8c9ba942656f5722fe242558&oe=5FF7D4B4',
      videoUrl: 'https://youtu.be/QZMf2zkKoF8',
      date: new Date()
    });
  }

  get ImageUrlCtrl(): FormControl {
    return this.form.get('imageUrl') as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.service.add(this.form.value);
      this.matDialogRef.close();
    }
  }
}
