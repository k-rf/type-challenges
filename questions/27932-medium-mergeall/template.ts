type MergeAll<
  XS extends Record<PropertyKey, unknown>[],
  U = XS[number],
  K extends PropertyKey = U extends U ? keyof U : never,
> = { [P in K]: U extends U ? U[P & keyof U] : never }
