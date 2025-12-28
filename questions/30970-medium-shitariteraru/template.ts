type IsFixedStringLiteralType<S extends string> = {} extends Record<S, 1>
  ? false
  : IsEqual<[S], S extends unknown ? [S] : never>;
