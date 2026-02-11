type CamelizeArray<T> = T extends [infer U, ...infer R]
  ? [Camelize<U>, ...CamelizeArray<R>]
  : T;

type Camelize<T> = {
  [K in keyof T as K extends string ? CamelCase<K> : K]: T[K] extends any[]
    ? CamelizeArray<T[K]>
    : Camelize<T[K]>;
};
