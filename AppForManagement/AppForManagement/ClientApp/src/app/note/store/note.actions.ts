import { Note } from './../model/note.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';


export const loadNotes = createAction(
  '[Notes List] Load Notes via Service',
);

export const notesLoaded = createAction(
  '[Notes Effect] Notes Loaded Successfully',
  props<{ notes: Note[] }>()
);

export const createNote = createAction(
  '[Create Note Component] Create Note',
  props<{ note: Note }>()
);

export const deleteNote = createAction(
  '[Notes List Operations] Delete Note',
  props<{ noteId: number }>()
);

export const updateNote = createAction(
  '[Notes List Operations] Update Note',
  props<{ update: Update<Note> }>()
);

export const noteActionTypes = {
  loadNotes,
  notesLoaded,
  createNote,
  deleteNote,
  updateNote
};
