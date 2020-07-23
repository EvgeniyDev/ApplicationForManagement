import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { areNotesLoaded } from './store/note.selectors';
import { loadNotes } from './store/note.actions';
import { AppState } from './../store/reducers/index';


@Injectable()
export class NoteResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        select(areNotesLoaded),
        tap((coursesLoaded) => {
          if (!coursesLoaded) {
            this.store.dispatch(loadNotes());
          }

        }),
        filter(notesLoaded => notesLoaded),
        first()
    );
  }
}
