let a: [number] = [1]

// A tuple of [first name, last name, birth year]
let b: [string, string, number] = ['malcolm', 'gladwell', 1963]
b = ['queen', 'elizabeth', 'ii', 1926]      // Error TS2322: Type 'string' is not
                                            // assibnable to type 'number'

// An array of train fares, which sometimes vaty depending on direction
let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
]
// Equivalently:
let moreTrainFares: ([number] | [number, number])[] = [
    //...
]

// A list of strings with at least 1 element
let friends: [string, ... string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
// A heterogeneous list
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']


// read-only arrays and tuples
let as: readonly number[] = [1, 2, 3]       // readonly number[]
let bs: readonly number[] = as.concat(4)    // readonly number[]
let three = bs[2]
as[4] = 5               // Error TS2542: Index signature in type
                        // 'readonly number[]' only permits reading.
as.push(6)              // Error TS2339: Property 'push' does not
                        // exist on type 'readonly number[]'.

type A = readonly string[]          // readonly string[]
type B = ReadonlyArray<string>      // readonly string[]
type C = Readonly<string[]>         // readonly string[]

type D = readonly [number, string]  // readonly [number, string]
type E = Readonly<[number, string]> // readonly [number, string]

export{}