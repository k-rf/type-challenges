type SignMatcher<
  A extends string,
  Sign extends string = '+' | '-',
> = A extends `${infer S extends Sign}${infer R}` ? [S, R] : ['', A]

type UnitMatcher<
  A extends string,
  Unit extends string = '%',
> = A extends `${infer R}${Unit}`
  ? [R, A extends `${R}${infer U}` ? U : '']
  : [A, '']

type PercentageParser<A extends string> = [
  SignMatcher<A>[0],
  ...UnitMatcher<SignMatcher<A>[1]>,
]
