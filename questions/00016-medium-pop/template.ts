type Pop<T extends any[]> = T extends [] ? [] : T extends [...infer U, unknown] ? U : never
