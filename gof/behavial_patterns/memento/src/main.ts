import { Editor } from "./editor/editor";
import { Caretaker } from "./editor/caretaker";

const editor = new Editor();
const caretaker = new Caretaker();

// 상태 저장 및 수정
editor.write("안녕하세요, ");
caretaker.save(editor.save());

editor.write("이 패턴은 메멘토 패턴입니다. ");
caretaker.save(editor.save());

editor.write("수정 작업을 더합니다.");

// 현재 상태 확인
console.log(`현재 내용: "${editor.getContent()}"`);

// 복원
const memento1 = caretaker.undo();
if (memento1) editor.restore(memento1);

const memento2 = caretaker.undo();
if (memento2) editor.restore(memento2);

// 복원 후 최종 상태 확인
console.log(`최종 내용: "${editor.getContent()}"`);
