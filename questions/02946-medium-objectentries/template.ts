type ObjectEntries<T> = T extends { [K in keyof T]-?: T[K] | undefined }
  ? { [K in keyof T]: [K, T[K]] }[keyof T]
  : {
      [K in keyof T]-?: T[K] extends infer U | undefined
        ? [K, U]
        : [K, keyof T];
    }[keyof T];
