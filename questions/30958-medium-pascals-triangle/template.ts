// 数値 → タプル変換（加算用）
type NumberToTuple<
  N extends number,
  T extends unknown[] = [],
> = T['length'] extends N ? T : NumberToTuple<N, [...T, unknown]>

// タプルベースの加算
type Add<A extends number, B extends number> = [
  ...NumberToTuple<A>,
  ...NumberToTuple<B>,
]['length'] &
number

// 前の行から次の行の中間要素を生成
// [1, 2, 1] → [3, 3] のように隣接要素を足す
type NextRowMiddle<Row extends number[]> = Row extends [
  infer A extends number,
  infer B extends number,
  ...infer Rest extends number[],
]
  ? [Add<A, B>, ...NextRowMiddle<[B, ...Rest]>]
  : []

// 前の行から次の行を生成
// [1, 2, 1] → [1, 3, 3, 1]
type NextRow<Row extends number[]> = [1, ...NextRowMiddle<Row>, 1]

// N行のパスカルの三角形を生成
type Pascal<
  N extends number,
  Result extends number[][] = [],
  CurrentRow extends number[] = [1],
> = Result['length'] extends N
  ? Result
  : Pascal<N, [...Result, CurrentRow], NextRow<CurrentRow>>
