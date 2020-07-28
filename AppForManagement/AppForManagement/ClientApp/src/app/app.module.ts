import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [NoteResolver],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
