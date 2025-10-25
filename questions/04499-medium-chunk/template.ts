type Chunk<
  T extends readonly unknown[],
  N extends number,
  Acc extends unknown[] = [],
> = Acc["length"] extends N
  ? [Acc, ...Chunk<T, N>]
  : T extends [infer K, ...infer L]
  ? Chunk<L, N, [...Acc, K]>
  : Acc extends []
  ? Acc
  : [Acc];
