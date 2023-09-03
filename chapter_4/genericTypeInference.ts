function map<T, U>(array: T[], f: (item: T) => U): U[] {
    return []
}

map(
    ['a', 'b', 'c'],    // An array of T
    _ => _ === 'a'      // A function that returns a U
    )


map<string, boolean> (
    ['a', 'b', 'c'],
    _ => _ === 'a'
)

// map<string> (           // Error TS 2558: Expected 2 type arguments, but got 1.
//     ['a', 'b', 'c'],
//     _ => _ === 'a'
// )

// OK, because boolean is assignable to boolean | string
map<string, boolean | string>(
    ['a', 'b', 'c'],
    _ => _ === 'a'
)

map<string, boolean | number>(
    ['a', 'b', 'c'],
    _ => _ === 'a'      // Error TS2322: Type 'boolean' is not assignable
)                       // to type 'number'


let promise = new Promise(resolve => 
    resolve(45)
)
// promise.then(result =>      // Inferred as {}
//     result * 4          // Error TS2362: The left-hand side of an arithmetic operation must    
// )                       // be of type 'any', 'number', 'bigint', or an enum type.

let promise1 = new Promise<number>(resolve =>
    resolve(45)
)
promise1.then(result =>  // number
    result * 4
)

export {}