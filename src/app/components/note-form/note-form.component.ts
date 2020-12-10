import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: NotesService,
    private matDialogRef: MatDialogRef<NoteFormComponent>
  ) {
    this.initForm();
  }
  initForm(): void {
    this.form = this.fb.group({
      id: '',
      text: ['', [Validators.required]],
      imageUrl: '',
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
