type DefinedPartial<T, K extends keyof T = keyof T> = K extends any
  ? T | DefinedPartial<Omit<T, K>>
  : never;
