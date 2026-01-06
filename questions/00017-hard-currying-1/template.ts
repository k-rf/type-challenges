declare function Currying<T>(fn: T): Curried<T>;

type Curried<T> = T extends (...args: infer A) => infer R
  ? A extends [infer U, ...infer Rest extends [unknown, ...unknown[]]]
    ? (arg: U) => Curried<(...args: Rest) => R>
    : T
  : never;
