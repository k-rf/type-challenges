declare function join<D extends string>(
  delimiter: D,
): <P extends string[]>(...parts: P) => Join<P, D>
