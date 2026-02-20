type MyReturnType<T extends CallableFunction> = T extends (...args: any[]) => infer U ? U : never
