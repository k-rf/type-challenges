type IncludeKey<T, K> = T extends K ? T : never;
type ExcludeKey<T, K> = T extends K ? never : T;

type Composite<T> = Omit<T, never>;

type PartialByKeys<T, K extends keyof T = keyof T> = Composite<
  {
    [P in keyof T as IncludeKey<P, K>]?: T[P];
  } & {
    [P in keyof T as ExcludeKey<P, K>]: T[P];
  }
>;
