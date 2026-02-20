type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

type Includes<T extends readonly any[], U> = T['length'] extends 0
  ? false
  : T extends [infer F, ...infer R]
    ? IsEqual<F, U> extends true
      ? true
      : Includes<R, U>
    : never
