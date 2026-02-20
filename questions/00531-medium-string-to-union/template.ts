type StringToUnion<T extends string> = T extends `${infer U}${infer V}` ? U | StringToUnion<V> : never
