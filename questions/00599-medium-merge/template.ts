type Merge<F, S, O = F & S> = { [K in keyof O]: K extends keyof S ? S[K] : O[K] }
