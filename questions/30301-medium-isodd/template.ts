type IsOdd<T extends number> = `${T}` extends `${bigint | ''}${
  | 1
  | 3
  | 5
  | 7
  | 9}`
  ? true
  : false
