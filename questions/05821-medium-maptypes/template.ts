type FromTo = { mapFrom: unknown; mapTo: unknown };

type MapToOf<T, R extends FromTo> = R extends { mapFrom: T }
  ? R["mapTo"]
  : never;

type MapTypes<T extends Record<PropertyKey, unknown>, R extends FromTo> = {
  [K in keyof T]: T[K] extends R["mapFrom"] ? MapToOf<T[K], R> : T[K];
};
