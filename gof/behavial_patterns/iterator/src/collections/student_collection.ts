import { Aggregate } from "./aggregate";
import { Iterator } from "../iterators/iterator";
import { StudentIterator } from "../iterators/student_iterator";

export class StudentCollection implements Aggregate<string> {
  private students: string[] = [];

  addStudent(student: string): void {
    this.students.push(student);
  }

  createIterator(): Iterator<string> {
    return new StudentIterator(this.students);
  }
}
