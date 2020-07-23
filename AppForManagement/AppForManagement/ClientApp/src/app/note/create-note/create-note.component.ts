import { Note } from './../model/note.model';
import { createNote } from './../store/note.actions';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html'
})

export class CreateNoteComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }

    const note: Note = { id: uuid.v4(), name: submittedForm.value.name, surname: submittedForm.value.surname, age: submittedForm.value.age };
    this.store.dispatch(createNote({ note }));
  }
}
