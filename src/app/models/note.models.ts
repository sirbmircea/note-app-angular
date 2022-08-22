export class Note {
  public noteTitle: String;
  public noteContent: String;
  constructor(title: String, content: String) {
    this.noteContent = content;
    this.noteTitle = title;
  }

  getTitle(): String {
    return this.noteTitle;
  }

  setTitle(title: String): void {
    this.noteTitle = title;
  }

  getContent(): String {
    return this.noteContent;
  }

  setContent(content: String): void {
    this.noteContent = content;
  }
}
