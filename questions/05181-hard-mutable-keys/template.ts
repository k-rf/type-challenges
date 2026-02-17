type MutableKeys<T extends Record<PropertyKey, unknown>> = keyof {
  [K in keyof T as IsEqual<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K]: any;
};
