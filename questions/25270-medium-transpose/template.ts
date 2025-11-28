type Append<T extends unknown[], U extends unknown[]> = T extends []
  ? { [I in keyof U]: [U[I]] }
  : [T, U] extends [
      [infer X extends unknown[], ...infer RX extends unknown[]],
      [infer Y, ...infer RY extends unknown[]],
    ]
  ? [[...X, Y], ...Append<RX, RY>]
  : [T, U] extends [
      [infer X, ...infer RX extends unknown[]],
      [infer Y, ...infer RY extends unknown[]],
    ]
  ? [[X, Y], ...Append<RX, RY>]
  : [];

type Transpose<M extends number[][], Ans extends unknown[][] = []> = M extends [
  infer R extends number[],
  ...infer Rest extends number[][],
]
  ? Transpose<Rest, Append<Ans, R>>
  : Ans;
