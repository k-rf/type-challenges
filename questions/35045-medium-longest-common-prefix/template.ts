type LongestCommonPrefix<
  T extends string[],
  P extends string = '',
> = T extends [`${P}${infer Next}${string}`, ...string[]]
  ? T extends `${P}${Next}${string}`[]
    ? LongestCommonPrefix<T, `${P}${Next}`>
    : P
  : P
