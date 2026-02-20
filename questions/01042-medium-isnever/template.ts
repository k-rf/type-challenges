type IsNever<T> = { [P in keyof T]: T[P] } extends never ? true : false
