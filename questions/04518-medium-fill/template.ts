type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Acc extends unknown[] = [],
> = T extends [infer U, ...infer R]
  ? Fill<
      R,
      N,
      Start,
      End,
      GreaterThan<Start, Acc["length"]> extends true
        ? [...Acc, U]
        : GreaterThan<End, Acc["length"]> extends true
        ? [...Acc, N]
        : [...Acc, U]
    >
  : Acc;
