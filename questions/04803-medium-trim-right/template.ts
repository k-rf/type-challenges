type TrimRight<S extends string> = S extends `${infer U}${' ' | '\n' | '\t'}`
  ? TrimRight<U>
  : S
