type Insert<T extends unknown[], U> = T extends [infer H, ...infer R]
  ? [H, U, ...R] | [H, ...Insert<R, U>]
  : [U];

type PermutationsOfTuple<
  T extends unknown[],
  A extends unknown[] = [],
> = T extends [infer U, ...infer R]
  ? PermutationsOfTuple<R, Insert<A, U> | [U, ...A]>
  : A;
