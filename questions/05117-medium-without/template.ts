type Without<T, U, Acc extends unknown[] = []> = T extends [infer X, ...infer Y]
  ? Without<Y, U, X extends Flatten<[U]>[number] ? Acc : [...Acc, X]>
  : Acc;
