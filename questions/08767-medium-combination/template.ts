type Combination<
  T extends readonly string[],
  All extends string = T[number],
> = CombinationFromUnion<All>

type CombinationFromUnion<All extends string> = [All] extends [never]
  ? never
  : {
      [K in All]: K | `${K} ${CombinationFromUnion<Exclude<All, K>>}`;
    }[All]
