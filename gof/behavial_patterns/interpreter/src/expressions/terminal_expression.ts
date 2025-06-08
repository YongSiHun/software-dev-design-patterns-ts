import { AbstractExpression } from "./abstract_expression";

export class TerminalExpression implements AbstractExpression {
  constructor(private value: number) {}

  interpret(context: Map<string, number>): number {
    return this.value;
  }
}
