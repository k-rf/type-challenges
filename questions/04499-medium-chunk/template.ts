type Head<
  T extends readonly unknown[],
  N extends number,
  R extends unknown[] = [],
> = R["length"] extends N
  ? R
  : T extends [infer U, ...infer V]
  ? Head<V, N, [...R, U]>
  : R;

type Chunk<T extends readonly unknown[], N extends number> = T extends []
  ? T
  : T extends [...Head<T, N>, ...infer R]
  ? [Head<T, N>, ...Chunk<R, N>]
  : [];
