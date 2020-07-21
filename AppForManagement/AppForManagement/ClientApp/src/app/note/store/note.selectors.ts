import { NoteState } from './note.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll } from './note.reducers';

export const noteFeatureSelector = createFeatureSelector<NoteState>('notes');

export const getAllNotes = createSelector(
  noteFeatureSelector,
  selectAll
);

export const areNotesLoaded = createSelector(
  noteFeatureSelector,
  state => state.notesLoaded
);
