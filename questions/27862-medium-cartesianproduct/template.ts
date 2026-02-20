type CartesianProduct<T, U> = T extends any
  ? U extends any
    ? [T, U]
    : []
  : []
