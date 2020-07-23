import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { noteReducer } from './store/note.reducers';
import { NoteService } from './services/note.services';
import { NoteEffects } from './store/note.effects';
import { NotesListComponent } from './notes-list/notes-list.component';
import { CreateNoteComponent } from './create-note/create-note.component';


@NgModule({
  declarations: [
    NotesListComponent,
    CreateNoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('notes', noteReducer),
    EffectsModule.forFeature([NoteEffects])
  ],
  providers: [NoteService],
  exports: [NotesListComponent, CreateNoteComponent]
})

export class NoteModule { }
