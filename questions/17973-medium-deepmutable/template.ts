type DeepMutable<T extends Record<PropertyKey, any>> = {
  -readonly [K in keyof T]: T[K] extends Function ? T[K] : DeepMutable<T[K]>;
}
