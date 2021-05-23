import { Component } from '@angular/core';
import { MyNote } from './shared/models/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  notes: MyNote[] = [];
  num : number = 0;
  noteNameInput!: string;
  noteContentInput! : string;
  onAdd (e : MouseEvent) {
    let note = new MyNote;
    note.createDate = new Date();
    note.id = this.num;
    this.num++;
    note.name = this.noteNameInput;
    note.text = this.noteContentInput;
    this.notes.push(note);
    this.noteNameInput = '';
    this.noteContentInput = '';
  }
  onDelete(e: MouseEvent, note_index : number) {
    this.notes.splice(note_index, 1);
  }
}
