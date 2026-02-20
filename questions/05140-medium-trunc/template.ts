type Sign = '-' | '' | '+'

type Trunc<T extends number | string> =
  T extends `${infer U extends Sign}.${number}`
    ? `${U}0`
    : `${T}` extends `${infer U}.${number}`
      ? U
      : `${T}`
