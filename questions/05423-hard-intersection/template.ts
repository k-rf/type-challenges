type Intersection<T> = T extends [infer H, ...infer R]
  ? (H extends number[] ? H[number] : H) & Intersection<R>
  : {};
