type RemoveIndexSignature<T> = {
  [K in keyof T as PropertyKey extends keyof T[K] ? never : K]: T[K];
}
