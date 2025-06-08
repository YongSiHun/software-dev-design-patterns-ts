import { TerminalExpression } from "./expressions/terminal_expression";
import { AdditionExpression } from "./expressions/addition_expression";
import { SubtractionExpression } from "./expressions/subtraction_expression";

/**
 * Client
 */

// (5 + 3) - 2
const five = new TerminalExpression(5);
const three = new TerminalExpression(3);
const two = new TerminalExpression(2);

const addition = new AdditionExpression(five, three);
const subtraction = new SubtractionExpression(addition, two);

const result = subtraction.interpret(new Map());
console.log(`결과: ${result}`); // 결과: 6
