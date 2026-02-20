type Unique<T extends unknown[], Acc extends unknown[] = []> = T extends [
  infer U,
  ...infer R,
]
  ? Unique<R, Includes<Acc, U> extends true ? Acc : [...Acc, U]>
  : Acc
