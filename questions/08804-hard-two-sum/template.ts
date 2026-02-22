type AddPattern<A extends number, B extends number> = B extends any
  ? Add<A, B>
  : never;

type TwoSum<T extends number[], U extends number> = T extends [
  infer F extends number,
  ...infer R extends number[],
]
  ? U extends AddPattern<F, R[number]>
    ? true
    : TwoSum<R, U>
  : false;
