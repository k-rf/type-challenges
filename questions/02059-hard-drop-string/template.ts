type DropString<
  S extends string,
  R extends string,
> = S extends `${infer H}${infer T}`
  ? Includes<ToSplitted<R>, H> extends true
    ? DropString<T, R>
    : `${H}${DropString<T, R>}`
  : S;
