import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteitemComponent } from './note-item.component';

describe('NoteitemComponent', () => {
  let component: NoteitemComponent;
  let fixture: ComponentFixture<NoteitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteitemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
