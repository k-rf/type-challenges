type Fibonacci<
  T extends number,
  F1 extends number[] = [0],
  F2 extends number[] = [0],
  C extends number[] = [0],
> = T extends C['length']
  ? F1['length']
  : Fibonacci<T, F2, [...F1, ...F2], [...C, 0]>
