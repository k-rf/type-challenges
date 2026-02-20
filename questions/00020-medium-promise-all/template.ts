declare function PromiseAll<T extends readonly unknown[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: Awaited<T[K]> }>
