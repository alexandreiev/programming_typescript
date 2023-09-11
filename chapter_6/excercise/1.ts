let a: number
a = 1 as 1

let a2: 1
// a1 = 1 as number    // Error TS2322: Type 'number' is not assignable to type '1'.


let s: number | string
s = 1 as number

let b: number
// b = true as boolean     // Error TS2322: Type 'boolean' is not assignable to type 'number'.

let n: (number | string)[]
n = [1, 2] as number[]

let n2: number[]
// n1 = [1, 2] as (number | string)[]  // Error TS2322: Type 'string' is not assignable to type 'number'.

let o: {a: boolean}
o = {a: true} as {a: true} 

let o2: {a: {b: [number | string]}}
o2 = {a: {b: ["srt"]}} as {a: {b: [string]}}


let f: (a: number) => string
f = ((a: number) => "str") as (a: number) => string 

let f2: (a: string) => string
// f2 = ((a: number) => "str") as (a: string) => string    // Error TS2352: Types of parameters 'a' and 'a' are incompatible.
                                                        // Type 'string' is not comparable to type 'number'


let f3: (a: string) => string
f3 = ((a: number | string) => "string") as (a: number | string) => string


enum E {
    X = 'X'
}

enum F {
    X = 'X'
}

let e = F.X
// e = E.X as E.X   // Error TS2322: Type 'E' is not assignable to type 'F'.



export {}