type Override<F, S> = { [K in keyof F as K extends keyof S ? never : K]: F[K] } & S;
type Merge<F, S> = { [K in keyof Override<F, S>]: Override<F, S>[K] };
