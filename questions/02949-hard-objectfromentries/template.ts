type ObjectFromEntries<T> =
  UnionToTuple<T> extends [infer H extends [string, any], ...any]
    ? Prettify<{ [key in H[0]]: H[1] } & ObjectFromEntries<Exclude<T, H>>>
    : {};
