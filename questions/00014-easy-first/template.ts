type First<T extends unknown[]> = T["length"] extends 0 ? never : T[0];
