type OmitByType<T, U extends T[keyof T]> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
}
