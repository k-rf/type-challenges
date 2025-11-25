type Combs<T extends any[]> = T extends [
  infer U extends string,
  ...infer R extends string[],
]
  ? `${U} ${R[number]}` | Combs<R>
  : never;
