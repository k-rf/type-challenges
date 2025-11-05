type NumberRange<
  L extends number,
  H extends number,
  Acc extends unknown[] = ConstructTuple<L>,
  Ans extends number[] = [Acc["length"]],
> = Acc["length"] extends H
  ? Ans[number]
  : NumberRange<L, H, [...Acc, unknown], [...Ans, [...Acc, unknown]["length"]]>;
