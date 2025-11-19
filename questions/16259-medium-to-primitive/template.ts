type ToPrimitive<T> = T extends object
  ? T extends Function
    ? Function
    : { [K in keyof T]: ToPrimitive<T[K]> }
  : T extends { valueOf: () => infer U }
  ? U
  : T;
