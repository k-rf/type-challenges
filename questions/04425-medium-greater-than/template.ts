type GreaterThan<
  T extends number | string,
  U extends number | string,
  Res = false,
> = `${T}` extends `${infer TF}${infer TR}`
  ? `${U}` extends `${infer UF}${infer UR}`
    ? [Res, TF & UF] extends [false, never] // Res == false and TF != UF
      ? GreaterThan<
          TR,
          UR,
          "0123456789" extends `${string}${TF}${string}${UF}${string}`
            ? false
            : true
        >
      : GreaterThan<TR, UR, Res>
    : true
  : U extends ""
  ? Res
  : false;
