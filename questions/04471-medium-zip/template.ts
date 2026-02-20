type Zip<T extends unknown[], U extends unknown[]> = [T, U] extends [
  [infer X, ...infer RX],
  [infer Y, ...infer RY],
]
  ? [[X, Y], ...Zip<RX, RY>]
  : []
