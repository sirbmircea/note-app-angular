import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.models';
import { NotesService } from 'src/app/service/notes-service.service';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.css'],
})
export class SearchNoteComponent implements OnInit {
  constructor(private notesService: NotesService) {}
  ngOnInit(): void {}

  onSubmit() {
    const inputElement = <HTMLInputElement>(
      document.getElementById('noteTitleInput')
    );
    this.notesService.findNotes(inputElement.value).subscribe((data: Note) => {
      if (data.noteTitle == '') {
        alert(`Nu am gasit notita cu titlul: ${inputElement.value}`);
      } else {
        alert(
          `Am gasit notita cu titlul: ${data.noteTitle} si contentul: ${data.noteContent}`
        );
      }
    });
  }
}
