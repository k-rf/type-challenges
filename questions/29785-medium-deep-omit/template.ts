type DeepOmit<T, K extends string> = {
  [P in keyof T as P extends K ? never : P]: K extends `${string}.${infer R}`
    ? DeepOmit<T[P], R>
    : T[P];
};
