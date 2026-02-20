/**
 * LastInUnion<1 | 2> = 2.
 */
type LastInUnion<U> =
  UnionToIntersection<U extends unknown ? (x: U) => 0 : never> extends (
    x: infer L,
  ) => 0
    ? L
    : never

/**
 * UnionToTuple<1 | 2> = [1, 2].
 */
type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last]
