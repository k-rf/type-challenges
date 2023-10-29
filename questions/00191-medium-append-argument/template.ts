type AppendArgument<Fn extends (...args: any) => unknown, A> = (...args: [...Parameters<Fn>, x: A]) => ReturnType<Fn>;
