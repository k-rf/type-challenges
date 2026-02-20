type FilterOut<T extends readonly any[], F> = T extends [infer U, ...infer R]
  ? [U] extends [F]
      ? FilterOut<R, F>
      : [U, ...FilterOut<R, F>]
  : []
