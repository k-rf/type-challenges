type Arg<T extends 'd' | 's'> = { d: number, s: string }[T]

type Format<T extends string> = T extends `${string}%${infer U}${infer R}`
  ? U extends 'd' | 's'
    ? (arg: Arg<U>) => Format<R>
    : Format<R>
  : string
