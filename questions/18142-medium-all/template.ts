type All<T extends unknown[], U, Ans = true> = T extends [infer X, ...infer R]
  ? IsEqual<U, X> extends true
    ? All<R, U, true>
    : false
  : Ans;
