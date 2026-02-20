type CheckRepeatedTuple<
  T extends unknown[],
  Seen extends unknown[] = [],
> = T extends [infer H, ...infer R]
  ? Includes<Seen, H> extends true
    ? true
    : CheckRepeatedTuple<R, [...Seen, H]>
  : IsEqual<T['length'], number> extends true
    ? false
    : false
