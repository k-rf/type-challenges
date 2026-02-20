type All<T extends unknown[], U> = T extends [infer X, ...infer R]
  ? IsEqual<U, X> extends true
    ? All<R, U>
    : false
  : true
