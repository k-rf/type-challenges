type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer P) => infer R
  ? (...args: [...P, x: A]) => R
  : never
