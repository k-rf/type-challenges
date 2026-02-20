type TupleToNestedObject<T extends PropertyKey[], U> = T extends []
  ? U
  : T extends [infer V extends PropertyKey, ...infer R extends PropertyKey[]]
    ? Record<V, TupleToNestedObject<R, U>>
    : never
