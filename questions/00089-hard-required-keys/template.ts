type RequiredKeys<T extends Record<PropertyKey, unknown>> =
  keyof GetRequired<T>
