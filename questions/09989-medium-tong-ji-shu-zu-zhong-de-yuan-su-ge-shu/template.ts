type Aggregate<T extends Record<PropertyKey, number[]>> = {
  [K in keyof T]: T[K]['length'];
}

type AppendObj<T extends Record<PropertyKey, number[]>, K extends keyof T> = {
  [P in keyof T]: P extends K ? [...T[P], 0] : T[P];
}

type InsertObj<
  T extends Record<PropertyKey, number[]>,
  K extends PropertyKey,
> = T & {
  [key in K]: [0];
}

type CountElementNumberToObject<
  T extends unknown[],
  Ans extends Record<PropertyKey, number[]> = {},
> = T extends [never]
  ? {}
  : T extends [infer U, ...infer R]
    ? U extends unknown[]
      ? CountElementNumberToObject<U, Ans>
      : U extends keyof Ans
        ? CountElementNumberToObject<R, AppendObj<Ans, U>>
        : U extends PropertyKey
          ? CountElementNumberToObject<R, InsertObj<Ans, U>>
          : never
    : Aggregate<Ans>
