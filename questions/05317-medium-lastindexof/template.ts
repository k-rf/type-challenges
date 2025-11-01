type LastIndexOf<
  T extends unknown[],
  U,
  C extends unknown[] = T extends [infer _, ...infer R] ? R : [],
> = T extends [...infer R, infer X]
  ? (<T>() => T extends X ? 1 : 2) extends <T>() => T extends U ? 1 : 2
    ? C["length"]
    : LastIndexOf<R, U, C extends [infer _, ...infer Rest] ? Rest : []>
  : -1;
