// Inc<N>: N を +1 する（型レベル加算）
type Inc<N extends number, T extends unknown[] = []> = T['length'] extends N
  ? [...T, unknown]['length']
  : Inc<N, [...T, unknown]>

// Enumerate<N>: 0..N-1 のユニオン
type Enumerate<
  N extends number,
  T extends number[] = [],
> = T['length'] extends N ? T[number] : Enumerate<N, [...T, T['length']]>

// Range[L, H] = Enumerate<H+1> - Enumerate<L> = L..H
type NumberRange<L extends number, H extends number> = Exclude<
  Enumerate<Inc<H>>,
  Enumerate<L>
>
