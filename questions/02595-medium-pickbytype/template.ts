type PickByType<T extends Record<PropertyKey, any>, U extends T[keyof T]> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};
