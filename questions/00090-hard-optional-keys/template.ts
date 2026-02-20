type OptionalKeys<T extends Record<PropertyKey, unknown>> =
  keyof GetOptional<T>
