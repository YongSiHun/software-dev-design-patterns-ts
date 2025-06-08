import { StudentCollection } from "./collections/student_collection";

const studentCollection = new StudentCollection();
studentCollection.addStudent("홍길동");
studentCollection.addStudent("김철수");
studentCollection.addStudent("이영희");

const iterator = studentCollection.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
