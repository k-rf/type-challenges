type Triangular<
  N extends number,
  C extends readonly 0[] = readonly [],
  A extends readonly 0[] = readonly [],
> = C["length"] extends N
  ? A["length"]
  : Triangular<N, readonly [...C, 0], readonly [...A, ...C, 0]>;
