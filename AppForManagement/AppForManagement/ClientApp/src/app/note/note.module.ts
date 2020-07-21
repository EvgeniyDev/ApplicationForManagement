import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { noteReducer } from './store/note.reducers';
import { NoteService } from './services/note.services';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('notes', noteReducer)
  ],
  providers: [NoteService]
})

export class NoteModule { }

