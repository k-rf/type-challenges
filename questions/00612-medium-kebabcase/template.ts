type KebabCase<S extends string> = S extends `${infer U}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<U>}${KebabCase<R>}`
    : `${Uncapitalize<U>}-${KebabCase<R>}`
  : S
