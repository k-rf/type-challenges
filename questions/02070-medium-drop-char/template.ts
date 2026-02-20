type DropChar<
  S extends string,
  C extends string,
> = S extends `${infer U}${infer V}`
  ? `${U extends C ? '' : U}${DropChar<V, C>}`
  : S
