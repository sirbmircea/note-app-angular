import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';

const routes: Routes = [
  { path: 'notes', component: NoteListComponent },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/search', component: SearchNoteComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
