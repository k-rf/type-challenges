type IsTuple<T> = [T] extends [never]
  ? false
  : T extends []
  ? true
  : T extends readonly [infer _, ...infer __]
  ? true
  : false;
