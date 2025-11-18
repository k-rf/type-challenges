type Integer<T extends number> = `${T}` extends `${number}.${number}`
  ? never
  : T | number extends T
  ? never
  : T;
