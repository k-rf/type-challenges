type Cap<
  S extends string,
  Sep extends string = " ",
  Sp extends string[] = Split<S, Sep>,
> = Join<
  {
    [K in keyof Sp]: Capitalize<Sp[K]>;
  },
  Sep
>;

type CapitalizeWords<
  S extends string,
  Separators extends string[] = Split<" .,!@#$%^&*()_+{}|🤣", "">,
> = Separators extends [infer Sep extends string, ...infer R extends string[]]
  ? CapitalizeWords<Cap<S, Sep>, R>
  : S;

type Dummy =
  //   ^? XXX: twoslash-queryを書いておかないとエラーになる
  CapitalizeWords<"aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq">;
