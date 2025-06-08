import { Memento } from "./memento";

export class Editor {
  private content: string = "";

  write(text: string): void {
    this.content += text;
  }

  save(): Memento {
    console.log(`현재 상태 저장: "${this.content}"`);
    return new Memento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getState();
    console.log(`상태 복원됨: "${this.content}"`);
  }

  getContent(): string {
    return this.content;
  }
}
