type FlattenDepth<
  T extends unknown[],
  D extends number = 1,
  L extends number[] = [],
> = L['length'] extends D
  ? T
  : T extends [infer U extends unknown[], ...infer R]
    ? [...FlattenDepth<U, D, [...L, number]>, ...FlattenDepth<R, D, L>]
    : T extends [infer U, ...infer R]
      ? [U, ...FlattenDepth<R, D, L>]
      : T
