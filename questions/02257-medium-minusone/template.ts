type Natural = number
type TupleNatural = unknown[]

type TupleSucc<N extends TupleNatural> = [unknown, ...N] extends [...infer U]
  ? U
  : never
type TuplePred<N extends TupleNatural> = [...N] extends [unknown, ...infer U]
  ? U
  : ToTupleNatural<9>

type Join2257<T extends (number | string)[]> = T extends [
  infer U extends number | string,
  ...infer R extends (number | string)[],
]
  ? `${U}${Join2257<R>}`
  : ''

type ToNumber2257<T extends string> = T extends `${infer U extends number}`
  ? U
  : never
type ToNatural<T extends TupleNatural> = T['length']
type ToTupleNatural<
  T extends Natural,
  Acc extends unknown[] = [],
> = T extends Acc['length'] ? Acc : ToTupleNatural<T, TupleSucc<Acc>>

type ToSplitted<T extends number | string> =
  `${T}` extends `${infer U}${infer R}` ? [U, ...ToSplitted<R>] : []

type RemoveLast<T extends string[]> = T extends [...infer U, string]
  ? U
  : never

type Decrement<T extends string> = ToNatural<
  TuplePred<ToTupleNatural<ToNumber2257<T>>>
>

type MinusOne<
  T extends number,
  S extends string[] = ToSplitted<T>,
  L extends string = Last<S>,
> = T extends 0
  ? -1
  : ToNumber2257<
      Join2257<
        [
          Decrement<L> extends 9
            ? Decrement<Last<RemoveLast<S>>>
            : Join2257<RemoveLast<S>>,
          Decrement<L>,
        ]
      >
    >
