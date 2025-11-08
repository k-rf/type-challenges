type IsNotEqual<X, Y> = IsEqual<X, Y> extends true ? false : true;

type CheckRepeatedChars<
  T extends string,
  S extends string[] = ToSplitted<T>,
  Acc extends string[] = [],
> = T extends `${infer U}${infer R}`
  ? CheckRepeatedChars<R, S, Includes<Acc, U> extends true ? Acc : [...Acc, U]>
  : IsNotEqual<Acc["length"], S["length"]>;
