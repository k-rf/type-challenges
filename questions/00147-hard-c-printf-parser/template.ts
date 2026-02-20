type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<
  S extends string,
  A extends string[] = [],
> = S extends `${infer X}%%${infer Y}`
  ? ParsePrintFormat<`${X}${Y}`, A>
  : S extends `${string}%${infer U extends keyof ControlsMap}${infer R}`
    ? ParsePrintFormat<R, [...A, ControlsMap[U]]>
    : A
