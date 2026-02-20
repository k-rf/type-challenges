type IsPalindrome<
  T extends string | number,
  S extends string[] = ToSplitted<`${T}`>,
> = S extends [
  infer U extends string,
  ...infer V extends string[],
  infer U extends string,
]
  ? IsUnion<U> extends true
    ? false
    : IsPalindrome<Join<V, ''>>
  : true
