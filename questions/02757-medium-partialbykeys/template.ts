type Prettify<T> = { [K in keyof T]: T[K] } & {};

type PartialByKeys<T, K extends keyof T = keyof T> = Prettify<
  Partial<T> & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;
