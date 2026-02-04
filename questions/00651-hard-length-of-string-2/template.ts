type LengthOfString2<
  S extends string,
  C extends 0[] = [],
> = S extends `${string}${infer R}`
  ? LengthOfString2<R, [...C, 0]>
  : C["length"];
