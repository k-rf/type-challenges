type IndexOf<T, U, C extends number[] = []> = T extends [infer X, ...infer R]
  ? (<T>() => T extends X ? 1 : 2) extends <T>() => T extends U ? 1 : 2
      ? C['length']
      : IndexOf<R, U, [...C, 0]>
  : -1
