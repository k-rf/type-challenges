type FirstUniqueCharIndex<
  T extends string,
  Ans extends string[] = [],
> = T extends ""
  ? -1
  : T extends `${infer H}${infer R}`
  ? H extends Ans[number]
    ? FirstUniqueCharIndex<R, [...Ans, H]>
    : R extends `${string}${H}${string}`
    ? FirstUniqueCharIndex<R, [...Ans, H]>
    : Ans["length"]
  : never;
