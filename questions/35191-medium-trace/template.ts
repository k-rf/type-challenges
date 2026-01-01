type Trace<
  T extends any[][],
  I extends 0[] = [],
> = I["length"] extends keyof T[I["length"]]
  ? T[I["length"]][I["length"]] | Trace<T, [...I, 0]>
  : never;
