type GetRequired<T extends Record<PropertyKey, unknown>> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
}
