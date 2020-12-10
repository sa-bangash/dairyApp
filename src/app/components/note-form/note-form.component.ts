import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  date = new Date();
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: '',
      text: '',
      imageUrl: '',
      videoUrl: '',
      date: new Date()
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.form.value)
  }
}
