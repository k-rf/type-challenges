type CompareArrayLength<
  T extends unknown[],
  U extends unknown[],
> = keyof T extends keyof U ? (keyof U extends keyof T ? 0 : -1) : 1
