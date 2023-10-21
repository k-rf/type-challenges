type MyCapitalize<S extends string> = S extends `${infer T}${infer U}` ? `${Uppercase<T>}${U}` : S;
