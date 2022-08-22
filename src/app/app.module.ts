import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { NotesService } from './service/notes-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    ErrorPageComponent,
    NoteListComponent,
    SearchNoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [NotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
