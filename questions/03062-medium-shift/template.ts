type Shift<T extends unknown[]> = T extends []
  ? []
  : T extends [unknown, ...infer U]
  ? U
  : never;
