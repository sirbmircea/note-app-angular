import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.models';
import { NotesService } from 'src/app/service/notes-service.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((data: Note[]) => {
      this.notes = data;
    });
  }
}
