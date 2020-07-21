import { noteActionTypes, notesLoaded } from './note.actions';
import { NoteService } from './../services/note.services';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CourseEffects {

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(noteActionTypes.loadNotes),
      concatMap(() => this.noteService.getAllNotes()),
      map(notes => notesLoaded({ notes }))
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(noteActionTypes.createNote),
      concatMap((action) => this.noteService.createNote(action.note)),
      tap(() => this.router.navigateByUrl('/notes'))
    ),
    {dispatch: false}
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(noteActionTypes.deleteNote),
      concatMap((action) => this.noteService.deleteNote(action.noteId))
    ),
    {dispatch: false}
  );

  updateCOurse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(noteActionTypes.updateNote),
      concatMap((action) => this.noteService.updateNote(action.update.id, action.update.changes))
    ),
    {dispatch: false}
  );

  constructor(private noteService: NoteService, private actions$: Actions, private router: Router) {}
}
