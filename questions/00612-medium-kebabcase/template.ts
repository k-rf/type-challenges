type Skewer<S extends string> = S extends `${infer U}${infer R}`
  ? U extends Lowercase<U>
    ? `${U}${Skewer<R>}`
    : `-${Lowercase<U>}${Skewer<R>}`
  : ''
type KebabCase<S extends string> = Skewer<S> extends `-${infer U}` ? U extends '' ? '-' : U : Skewer<S>
