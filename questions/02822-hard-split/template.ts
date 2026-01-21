type Split<S extends string, SEP extends string = never> = S extends SEP
  ? []
  : S extends `${infer X}${SEP}${infer Y}`
    ? [X, ...(ToSplitted<Y>["length"] extends 0 ? [] : Split<Y, SEP>)]
    : IsEqual<S, string> extends true
      ? S[]
      : [S];
