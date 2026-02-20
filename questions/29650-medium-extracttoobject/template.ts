type Prettify<T> = Omit<T, never>

type ExtractToObject<T, U extends keyof T> = Prettify<
  {
    [K in keyof T as K extends U ? never : K]: T[K];
  } & T[U]
>
