type CompareArrayLength<T extends any[], U extends any[]> = [T, U] extends [
  [],
  [],
]
  ? 0
  : T extends []
  ? -1
  : U extends []
  ? 1
  : [T, U] extends [[unknown, ...infer TR], [unknown, ...infer UR]]
  ? CompareArrayLength<TR, UR>
  : never;
