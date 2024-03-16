type Falsy = false | 0 | '' | undefined | null | [] | Record<PropertyKey, never>

type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true
