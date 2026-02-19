type BinaryToDecimal<
  S extends string,
  A extends any[] = [],
> = S extends `${infer U}${infer R}`
  ? U extends "0"
    ? BinaryToDecimal<R, [...A, ...A]>
    : BinaryToDecimal<R, [...A, ...A, 1]>
  : A["length"];
