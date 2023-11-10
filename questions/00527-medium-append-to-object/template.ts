type AppendToObject<T, U extends PropertyKey, V> = { [K in keyof (T & Record<U, V>)]: (T & Record<U, V>)[K] };
