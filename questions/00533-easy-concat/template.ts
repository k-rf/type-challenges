type Tuple = readonly unknown[]

type Concat<T extends Tuple, U extends Tuple> = [...T, ...U]
