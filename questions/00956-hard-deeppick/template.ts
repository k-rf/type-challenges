type DeepPick<O, K> = UnionToIntersection<
  K extends `${infer U}.${infer R}`
    ? U extends keyof O
      ? Record<U, DeepPick<O[U], R>>
      : never
    : K extends keyof O
      ? Record<K, O[K]>
      : never
>;
