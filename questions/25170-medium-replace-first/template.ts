type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [
  infer U,
  ...infer Rest,
]
  ? U extends S
    ? [R, ...Rest]
    : [U, ...ReplaceFirst<Rest, S, R>]
  : [];
