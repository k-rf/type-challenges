type Tail<T extends unknown[]> = T extends [unknown, ...infer U] ? U : []

// 配列を縮小する方針
type Last<T extends any[]> = T[Tail<T>['length']]

// 配列を拡張する方針
// type Last<T extends any[]> = [never, ...T][T["length"]]
