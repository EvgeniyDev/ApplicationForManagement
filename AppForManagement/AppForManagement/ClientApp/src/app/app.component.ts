import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})

export class AppComponent implements OnInit {
  title = 'NoteManagement';

  note: Note = new Note();
  notes: Note[];
  tableMode: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.dataService.getNotes()
      .subscribe((data: Note[]) => this.notes = data);
  }

  save() {
    if (this.note.id == null) {
      this.dataService.createNote(this.note)
        .subscribe((data: Note) => this.notes.push(data));
    }
    else {
      this.dataService.updateNote(this.note)
        .subscribe(data => this.loadNotes());
    }

    this.cancel();
  }

  editNote(note: Note) {
    this.note = note;
  }

  cancel() {
    this.note = new Note();
    this.tableMode = true;
  }

  delete(note: Note) {
    this.dataService.deleteNote(note.id)
      .subscribe(data => this.loadNotes());
  }

  add() {
    this.cancel();
    this.tableMode = false;
  }
}
