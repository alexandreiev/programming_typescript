let a = 'x'         // string
let b = 3           // number
var c = true        // boolean
const d = {x: 3}    // {x: number}

enum E {X, Y, Z}
let e = E.X         // E


const a1 = 'x'      // 'x'
const b1 = 3        // 3
const c1 = true     // true

const e1 = E.X      // E.X


let a2: 'x' = 'x'           // 'x'
let b2: 3 = 3               // 3
var c2: true = true         // true
const d2: {x: 3} = {x: 3}   // {x: number}


const a3 = 'x'  // 'x'
let b3 = a3     // string

const c3: 'x' = 'x' // 'x'
let d3 = c          // 'x'



let a4 = null   // any
a4 = 3          // any
a4 = 'b'        // any


function x() {
    let a4 = null   // any
    a4 = 3          // any
    a4 = 'b'        // any
    return a
}
let s = x()                 // string


// The const type

let a5 = {x: 3}          // {x: number}
let b5: {x: 3}           // {x:3}
let c5 = {x: 3} as const // {readonly x: 3}


let d6 = [1, {x: 2}]            // (number | {x: number})[]
let e6 = [1, {x: 2}] as const   // readonly [1, {x: 2}]


// excess property checking

type Options = {
    baseURL: string
    cacheSize?: number
    tier?: 'prod' | 'dev'
}

class API {
    constructor (private options: Options) {}
}

new API({
    baseURL: 'https://api.mysite.com',
    tier: 'prod'
})

// new API({                               // Error TS2345: Argument of type '{ baseURL: string; badTier: string; }' 
//     baseURL: 'https://api.mysite.com',  // is not assignable to parameter of type 'Options'.
//     badTier: 'prod'
// })

new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
} as Options)


let badOptions = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
}
new API(badOptions)

// let options: Options = {
//     baseURL: 'https://api.mysite.com',  // Error TS2322: Type '{ baseURL: string; badTier: string; }'
//     badTier: 'prod'                     // is not assignable to type 'Options'.
// }
// new API(badOptions)



export {}