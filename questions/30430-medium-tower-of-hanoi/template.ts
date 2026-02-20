type Hanoi<
  N extends number,
  From = 'A',
  To = 'B',
  Intermediate = 'C',
  C extends 0[] = [],
> = N extends C['length']
  ? []
  : [
      ...Hanoi<N, From, Intermediate, To, [...C, 0]>,
      [From, To],
      ...Hanoi<N, Intermediate, To, From, [...C, 0]>,
    ]
