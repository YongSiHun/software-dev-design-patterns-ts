import { AbstractExpression } from "./abstract_expression";

export class AdditionExpression implements AbstractExpression {
  constructor(
    private left: AbstractExpression,
    private right: AbstractExpression
  ) {}

  interpret(context: Map<string, number>): number {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}
