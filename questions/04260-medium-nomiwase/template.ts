type Helper<S extends string> = S extends `${infer U}${infer V}`
  ? U | Helper<V>
  : S

type AllCombinations<S extends string, U extends string = Helper<S>> = [
  U,
] extends [never]
  ? ''
  :
    | ''
    | {
      [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}`;
    }[U]
