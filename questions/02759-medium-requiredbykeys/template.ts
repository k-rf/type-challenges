type RequiredByKeys<T, K extends keyof T = keyof T> = Composite<
  {
    [P in keyof T as IncludeKey<P, K>]-?: T[P];
  } & {
    [P in keyof T as ExcludeKey<P, K>]: T[P];
  }
>;
