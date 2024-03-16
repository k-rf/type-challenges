type Falsy = false | 0 | '' | undefined | null | [] | Record<PropertyKey, undefined>

type AnyOf<T extends readonly any[]> = T['length'] extends 0
  ? false
  : T extends [infer U, ...infer V]
    ? U extends Falsy ? AnyOf<V> : true
    : true
