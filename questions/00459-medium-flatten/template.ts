type Flatten<T extends unknown[]> = T extends [infer U, ...infer R]
  ? U extends unknown[]
    ? [...Flatten<U>, ...Flatten<R>]
    : [U, ...Flatten<R>]
  : T
