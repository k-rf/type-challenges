type FlipArguments<T extends (...args: any) => any> = T extends (
  ...args: any[]
) => any
  ? (...args: Reverse<Parameters<T>>) => ReturnType<T>
  : never;
