type AppendToObject<T, U extends PropertyKey, V> = { [K in keyof T | U]: K extends keyof T ? T[K] : V };
