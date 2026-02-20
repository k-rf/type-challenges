type GetMiddleElement<T extends unknown[]> = T['length'] extends 0 | 1 | 2
  ? T
  : T extends [unknown, ...infer U, unknown]
    ? GetMiddleElement<U>
    : never
