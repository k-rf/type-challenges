type Get<T extends Record<string, any>, K extends string> = K extends keyof T
  ? T[K]
  : K extends `${infer U}.${infer R}`
    ? Get<T[U], R>
    : never;
