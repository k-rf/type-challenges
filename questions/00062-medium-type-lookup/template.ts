type LookUp<U extends { type: string }, T extends U["type"]> = {
  [P in U as P["type"] extends T ? "type" : never]: P;
} extends { type: infer V }
  ? V
  : never;
