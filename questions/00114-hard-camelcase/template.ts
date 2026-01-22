type IsGap<T extends string> = Uppercase<T> extends Lowercase<T> ? true : false;

type CamelCase<S extends string> =
  S extends Lowercase<S>
    ? S extends `${infer F}_${infer RF}${infer R}`
      ? RF extends "_"
        ? `${F}_${CamelCase<`_${R}`>}`
        : `${F}${IsGap<RF> extends true ? `_${RF}` : Uppercase<RF>}${CamelCase<R>}`
      : S
    : CamelCase<Lowercase<S>>;
