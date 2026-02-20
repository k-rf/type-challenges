type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer T}${From}${infer U}`
    ? `${T}${To}${ReplaceAll<U, From, To>}`
    : S
