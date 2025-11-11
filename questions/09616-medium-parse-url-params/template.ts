type ParseUrlParams<
  T extends string,
  Ans extends string[] = [],
> = T extends `${string}:${infer U}/${infer R}`
  ? ParseUrlParams<R, [...Ans, U]>
  : T extends `${string}:${infer U}`
  ? ParseUrlParams<"", [...Ans, U]>
  : Ans[number];
