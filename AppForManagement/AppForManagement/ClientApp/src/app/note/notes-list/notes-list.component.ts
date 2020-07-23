import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';

import { getAllNotes } from './../store/note.selectors';
import { noteActionTypes } from './../store/note.actions';
import { AppState } from './../../store/reducers/index';
import { Note } from './../model/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html'
})

export class NotesListComponent implements OnInit {

  notes$: Observable<Note[]>;
  noteToBeUpdated: Note;
  isUpdateActivated = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.notes$ = this.store.select(getAllNotes);
  }

  deleteNote(noteId: number) {
    this.store.dispatch(noteActionTypes.deleteNote({ noteId }));
  }

  showUpdateForm(note: Note) {
    this.noteToBeUpdated = { ...note };
    this.isUpdateActivated = true;
  }

  updateNote(updateForm) {
    const update: Update<Note> = {
      id: this.noteToBeUpdated.id,
      changes: {
        ...this.noteToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(noteActionTypes.updateNote({ update }));

    this.isUpdateActivated = false;
    this.noteToBeUpdated = null;
  }
}
