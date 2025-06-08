import { Memento } from "./memento";

export class Caretaker {
  private history: Memento[] = [];

  save(memento: Memento): void {
    console.log("상태가 저장되었습니다.");
    this.history.push(memento);
  }

  undo(): Memento | null {
    if (this.history.length > 0) {
      console.log("이전 상태로 되돌립니다.");
      return this.history.pop()!;
    }
    console.log("더 이상 복원할 상태가 없습니다.");
    return null;
  }
}
