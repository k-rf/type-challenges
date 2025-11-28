type Transpose<M extends number[][], R = M["length"] extends 0 ? [] : M[0]> = {
  [I in keyof R]: {
    [J in keyof M]: I extends keyof M[J] ? M[J][I] : never;
  };
};
