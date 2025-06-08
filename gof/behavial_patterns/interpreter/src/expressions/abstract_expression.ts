export interface AbstractExpression {
  interpret(context: Map<string, number>): number;
}
