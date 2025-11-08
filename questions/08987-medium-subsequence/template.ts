type Subsequence<T extends any[], Ans extends any[] = []> = T extends [
  infer U,
  ...infer R,
]
  ? Subsequence<R, Ans | [...Ans, U]>
  : Ans;
