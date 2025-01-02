type Reverse<T extends unknown[], Acc extends unknown[] = []> = T extends []
  ? Acc
  : T extends [infer U, ...infer R]
  ? Reverse<R, [U, ...Acc]>
  : never;
