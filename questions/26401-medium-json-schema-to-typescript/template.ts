type Match<T> = T extends "string"
  ? string
  : T extends "number"
  ? number
  : T extends "boolean"
  ? boolean
  : T;

type P = { type: "number" | "string" | "boolean" };
type A = { type: "array"; items?: P | A | O };
type O = {
  type: "object";
  properties?: Record<string, P | A | O>;
  required?: readonly string[];
};

type JSONSchema2TS<T extends P | A | O> = // object
  T extends {
    type: "object";
    properties: infer U extends Record<string, P | A | O>;
    required: infer V extends unknown[];
  }
    ? Omit<
        {
          [K in keyof U as K extends V[number] ? K : never]: JSONSchema2TS<
            U[K]
          >;
        } & {
          [K in keyof U as K extends V[number] ? never : K]?: JSONSchema2TS<
            U[K]
          >;
        },
        never
      >
    : T extends {
        type: "object";
        properties: infer U extends Record<string, P | A | O>;
      }
    ? {
        [K in keyof U]?: JSONSchema2TS<U[K]>;
      }
    : T extends { type: "object" }
    ? Record<string, unknown>
    : // array
    T extends { type: "array"; items: infer U extends O }
    ? JSONSchema2TS<U>[]
    : T extends { type: "array"; items: { type: infer U } }
    ? Match<U>[]
    : T extends { type: "array" }
    ? unknown[]
    : // enum
    T extends { type: infer U; enum: Array<infer V> }
    ? V extends Match<U>
      ? V
      : never
    : T extends { type: infer U }
    ? Match<U>
    : T;
