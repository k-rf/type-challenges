type IsRequiredKey<T, K extends keyof T> = (
  K extends unknown ? IsUnion<T[K]> : never
) extends false
  ? true
  : false
