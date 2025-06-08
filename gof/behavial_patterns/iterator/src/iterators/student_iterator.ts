import { Iterator } from "./iterator";

export class StudentIterator implements Iterator<string> {
  private index = 0;

  constructor(private students: string[]) {}

  next(): string | null {
    if (this.hasNext()) {
      return this.students[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.students.length;
  }
}
