type BEMHelper<P extends string, T extends string[]> = T extends []
  ? ''
  : `${P}${T[number]}`

type BEM<
  B extends string,
  E extends string[],
  M extends string[],
> = `${B}${BEMHelper<'__', E>}${BEMHelper<'--', M>}`
