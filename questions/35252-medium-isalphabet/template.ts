type IsAlphabet<S extends string> = Lowercase<S> extends Uppercase<S>
  ? false
  : true
