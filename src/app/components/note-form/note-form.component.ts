import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      imageUrl: '',
      videoUrl: '',
      date: new Date()
    });
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