import { Command } from "./commands/command";

export class Invoker {
  private history: Command[] = [];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undoLastCommand(): void {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    } else {
      console.log("실행 취소할 명령이 없습니다.");
    }
  }
}
