type Thenable<T> = {
  then: (onfulfilled: (arg: T) => unknown) => unknown
}
type Awaitable<T> = Promise<T> | Thenable<T>

type MyAwaited<T extends Awaitable<unknown>> = T extends Awaitable<infer U>
  ? U extends Awaitable<unknown>
    ? MyAwaited<U>
    : U
  : never
