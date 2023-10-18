type Tail<T extends unknown[]> = ((...as: T) => never) extends (b: never, ...bs: infer U) => never ? U : never;

// 配列を縮小する方針
type Last<T extends any[]> = T[Tail<T>["length"]];

// 配列を拡張する方針
// type Last<T extends any[]> = [never, ...T][T["length"]]
