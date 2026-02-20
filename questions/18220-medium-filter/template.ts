type Filter<T extends any[], P> = T extends [infer U, ...infer R]
  ? U extends P
    ? [U, ...Filter<R, P>]
    : [...Filter<R, P>]
  : []
