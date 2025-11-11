type ParseUrlParams<T extends string> = T extends `${string}:${infer U}`
  ? U extends `${infer V}/${infer R}`
    ? V | ParseUrlParams<R>
    : U
  : never;
