import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { NoteResolver } from './note/note.resolver';
import { NotesListComponent } from './note/notes-list/notes-list.component';
import { CreateNoteComponent } from './note/create-note/create-note.component';
import { NoteModule } from './note/note.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    NoteModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{
        path: 'notes',
        component: NotesListComponent,
        resolve: {
          notes: NoteResolver
        },
      },
      { path: 'create-note', component: CreateNoteComponent },
      { path: '**', redirectTo: 'notes' }],
    ),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers 
    })
  ],
  providers: [NoteResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
