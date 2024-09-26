type StartsWith<T extends string, U extends string> = [T, U] extends [
  string,
  "",
]
  ? true
  : [T, U] extends [`${infer T1}${infer TR}`, `${infer U1}${infer UR}`]
  ? T1 extends U1
    ? StartsWith<TR, UR>
    : false
  : false;
