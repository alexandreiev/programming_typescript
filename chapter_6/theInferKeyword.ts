type ElementType<T> = T extends unknown[] ? T[number] : T
type A = ElementType<number[]>  // number
type B = ElementType<string>    // string

type ElementType2<T> = T extends (infer U)[] ? U : T
type A2 = ElementType2<number[]>    // number
type B2 = ElementType2<string>      // string

type ElementUgly<T, U> = T extends U[] ? U : T
// type C = ElementUgly<number[]>  // Error TS 2314: Generic type 'ElementUgly' requires 2 type argument(s).


type SecondsArg<F> = F extends (a: any, b: infer B) => any ? B : never

// get the type of Array.slice
type F = typeof Array['prototype']['slice']
type A3 = SecondsArg<F>     // number | undefined


export {}