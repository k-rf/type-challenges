type TupleKeys<T extends readonly unknown[]> = T extends readonly [
  unknown,
  ...infer Tail,
]
  ? TupleKeys<Tail> | Tail['length']
  : never

type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in TupleKeys<T> as Capitalize<T[K]>]: N extends true ? K : T[K];
}
