type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never;
