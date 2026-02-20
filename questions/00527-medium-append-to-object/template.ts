type MergeObject<T> = { [K in keyof T]: T[K] }
type AppendToObject<T, U extends PropertyKey, V> = MergeObject<T & Record<U, V>>
