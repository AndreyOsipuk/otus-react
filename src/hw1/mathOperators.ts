export type ScalarOperationType = (first: number, second?: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second?: number
): number => first * (second || 0);

export const div: ScalarOperationType = (
  first: number,
  second?: number
): number => first / (second || 1);

export const add: ScalarOperationType = (
  first: number,
  second?: number
): number => first + (second || 0);

export const minus: ScalarOperationType = (
  first: number,
  second?: number
): number => first - (second || 0);

export const square: ScalarOperationType = (first: number): number =>
  Math.pow(first, 2);

export const degree: ScalarOperationType = (
  first: number,
  second?: number
): number => Math.pow(first, second || 0);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": square,
  "^": degree,
};

export const mathPriorities: number[] = [1, 2, 3, 4];

const [ZERO, FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "**": ZERO,
  "^": FIRST,
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
};
