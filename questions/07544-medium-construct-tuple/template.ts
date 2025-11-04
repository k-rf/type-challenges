type ConstructTuple<
  L extends number,
  Acc extends unknown[] = [],
> = L extends Acc["length"] ? Acc : ConstructTuple<L, [...Acc, unknown]>;
