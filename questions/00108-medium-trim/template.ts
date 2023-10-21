type Space = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${Space}${infer U}` | `${infer U}${Space}` ? Trim<U> : S;
