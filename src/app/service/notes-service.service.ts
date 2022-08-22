import { Injectable } from '@angular/core';
import { Note } from '../models/note.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class NotesService {
  private baseUrl = environment.apiBaseURL;
  constructor(private httpclient: HttpClient) {}

  public getNotes(): Observable<Note[]> {
    return this.httpclient.get<Note[]>(`${this.baseUrl}/notes`);
  }

  public addNotes(note: Note): Observable<Note> {
    return this.httpclient.post<Note>(`${this.baseUrl}/notes/add`, note);
  }

  public findNotes(noteTitle: string): Observable<Note> {
    return this.httpclient.get<Note>(
      `${this.baseUrl}/notes/search/${noteTitle}`
    );
  }
}
