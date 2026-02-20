type ToNumber<S extends string> = S extends `${infer U extends number}`
  ? U
  : never
