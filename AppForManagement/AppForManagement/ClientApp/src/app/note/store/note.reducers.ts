import { Note } from './../model/note.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { noteActionTypes } from './note.actions';

export interface NoteState extends EntityState<Note> {
  notesLoaded: boolean;
}

export const adapter: EntityAdapter<Note> = createEntityAdapter<Note>();

export const initialState = adapter.getInitialState({
  notesLoaded: false
});

export const noteReducer = createReducer(
  initialState,

  on(noteActionTypes.notesLoaded, (state, action) => {
    return adapter.addAll(
      action.notes,
      {...state, notesLoaded: true}
    );
  }),

  on(noteActionTypes.createNote, (state, action) => {
    return adapter.addOne(action.note, state);
  }),

  on(noteActionTypes.deleteNote, (state, action) => {
    return adapter.removeOne(action.noteId, state);
  }),

  on(noteActionTypes.updateNote, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
