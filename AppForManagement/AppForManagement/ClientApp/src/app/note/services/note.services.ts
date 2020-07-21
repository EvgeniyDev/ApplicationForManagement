import { Note } from './../model/note.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class NoteService {

  http: HttpClient;
  private url = '/api/notes'

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.url, note);
  }

  deleteNote(noteId: number): Observable<any> {
    return this.http.delete(this.url + '/' + noteId);
  }

  updateNote(noteId: string | number, changes: Partial<Note>): Observable<any> {
    return this.http.put(this.url + '/' + noteId, changes);
  }
}
