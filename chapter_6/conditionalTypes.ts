type IsString<T> = T extends string ? true : false

type A = IsString<string>   // true
type B = IsString<number>   // false

type ToArray<T> = T[]
type A1 = ToArray<number>           // number[]
type B1 = ToArray<number | string>  // (number | string)[]


type ToArray2<T> = T extends unknown ? T[] : T[]
type A2 = ToArray2<number>           // number[]
type B2 = ToArray2<number | string>  // number[] | string[]


type Without<T, U> = T extends U ? never : T
type A3 = Without<boolean | number | string, boolean>   // string | number


export {}