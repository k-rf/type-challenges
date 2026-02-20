type FindEles<
  T extends any[],
  Ans extends unknown[] = [],
  Check extends unknown[] = [],
> = T extends [infer U, ...infer R]
  ? Includes<R, U> extends false
    ? FindEles<
        R,
        Includes<Check, U> extends true ? Ans : [...Ans, U],
        [...Check, U]
      >
    : FindEles<R, Ans, [...Check, U]>
  : Ans
