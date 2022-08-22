import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/models/note.models';
import { NotesService } from 'src/app/service/notes-service.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  onAddNote(addForm: NgForm): void {
    this.notesService.addNotes(addForm.value).subscribe(
      (response: Note) => {
        if (response.noteTitle == '') {
          alert('Avem duplicat!');
        } else {
          alert(
            `Notita cu titlul: ${response.noteTitle} si contentul: ${response.noteContent} a fost adaugata!`
          );
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
