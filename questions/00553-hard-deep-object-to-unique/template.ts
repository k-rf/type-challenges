type DeepObjectToUniq<O extends object> = {
  [K in keyof O]: O[K] extends object
    ? DeepObjectToUniq<O[K]> & { [unique: symbol]: [O, K] }
    : O[K];
} & { [unique: symbol]: O };
