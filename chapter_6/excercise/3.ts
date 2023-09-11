// Write an Exclusive<T, U> type that computes the types that are in either T or U ,
// but not both. For example, Exclusive<1 | 2 | 3, 2 | 3 | 4> should resolve
// to 1 | 4 . Write out step by step how the typechecker evaluates Exclusive<1 |
// 2, 2 | 4> .

type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>

type A = Exclusive<1 | 2 | 3, 2 | 3 | 4>

export {}