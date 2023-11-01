type LengthOfString<S extends string, Acc extends unknown[] = []> = S extends `${string}${infer Rest}`
  ? LengthOfString<Rest, [...Acc, string]>
  : Acc["length"];
