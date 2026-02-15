type ObjectFromEntries<E extends [string, unknown]> = {
  [K in E as K[0]]: K[1];
};
