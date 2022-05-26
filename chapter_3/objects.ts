let a: object = {
    b: 'x'
}
a.b // Error TS2339: Property 'b' does not exist on type 'object'.

let a1 = {
    b: 'x'
}               // {b: string}
a1.b             // string

let b = {
    c: {
        d: 'f'
    }
}               // {c: { d: string}}


let a2: {b: number} = {
    b: 12
}               // b: number


let c: {
    firstname: string
    lastname: string
} = {
    firstname: 'john',
    lastname: 'barrowman'
}

class Person {
    constructor(
        public firstname: string,   // public is shorthand for
                                    // this.firstname = firstname
        public lastname: string
    ) {}
}

c = new Person('matt', 'smith') // OK

let a3: {b: number}

a3 = {}                         // Error TS2741: Property 'b' is missing in type '{}'
                                // but required in type '{b: number}'.

a3 = {
    b:1,
    c: 2                        // Error TS2322: Type 'b: number; c: number}' is not assignable
}                               // to type '{b: number}'. Object literal may only specify known
                                // properties, and 'c' does not exist in type '{b: number}'.

// definite assignment
let i: number
let j = i * 3                   // Error TS2454: Variable 'i' is used
                                // before being assigned

let i1
let j1 = i1 * 3                 // Error TS2532: Object is possible
                                // 'undefined'.

let a4: {
    b: number               // 'a' has a property 'b' that's a number
    c?: string              // 'a' might have a property 'c' that's a string. 
                            // And if 'c' is set, it might be underfined.
    [key: number]: boolean  // 'a' might have any number of numeric properties that are booelans.
}

a4 = {b: 1}
a4 = {b: 1, c: undefined}
a4 = {b: 1, c: 'd'}
a4 = {b: 1, c: 'd'}
a4 = {b: 1, 10: true}
a4 = {b: 1, 10: true, 20: false}
a4 = {10: true}                 // Error TS2741: Property 'b' is missing in type
                                // '{10: true}'.
a4 = {b: 1, 33: 'red'}          // Error TS2741: Type 'string' is not assignable
                                // to type 'boolean'.

// index signatures
let airplaneSeatingAssignments: {
    [seatNumber: string]: string
} = {
    '34D': 'Boris Cherny',
    '34E': 'Bill Gates'
}


let user: {
    readonly firsname: string
} = {
    firsname: 'abby'
}
user.firsname // string
user.firsname = 'abbey with an e'   // Error TS2540: Cannot assign to 'firstname' because it
                                    // is a read-only property

let danger: {}
danger = {}
danger = {x: 1}
danger = []
danger = 2

export{}