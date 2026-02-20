type FlipArguments<T extends CallableFunction> = T extends (
  ...args: infer U
) => infer V
  ? (...args: Reverse<U>) => V
  : never
