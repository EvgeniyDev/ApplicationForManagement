import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
    EffectsModule.forFeature([NoteEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [NoteService],
  exports: [NotesListComponent, CreateNoteComponent]
})

export class NoteModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}
