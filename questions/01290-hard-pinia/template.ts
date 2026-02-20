type Getter<T> = {
  [K in keyof T]: T[K] extends (...args: any) => infer U ? U : never;
}

type Store<S, G, A> = {
  id: string
  state: () => S
  getters: G & ThisType<Readonly<S> & Getter<G>>
  actions: A & ThisType<S & A>
}

declare function defineStore<S, G, A>(store: Store<S, G, A>): S & Getter<G> & A
