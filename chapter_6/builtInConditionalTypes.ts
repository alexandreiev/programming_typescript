type A = number | string
type B = string
type C = Exclude<A, B>  // number

type C2 = Extract<A, B>  // string

type A3 = {a?: number | null}
type B3 = NonNullable<A3['a']>   // number

type F = (a: number) => string
type R = ReturnType<F>   // string

type A4 = {new(): B4}
type B4 = {b: number}
type I = InstanceType<A4>   // {b: number}


export {}