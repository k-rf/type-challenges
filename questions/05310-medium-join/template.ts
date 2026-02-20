type Join<
  T extends string[],
  U extends string | number = ',',
  Acc extends string = '',
> = T extends [infer S extends string, ...infer R extends string[]]
  ? Join<R, U, Acc extends '' ? S : `${Acc}${U}${S}`>
  : Acc
