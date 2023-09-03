// Implement a small typesafe assertion library `is`. Start by sketching out your types.


function is<T>(param1: T, ...param2: T[]): boolean {
    for (let p of param2) {
        if (param1 !== p) {
            return false
        }
    }
    return true
}


let result: boolean
// compare a string and a string
result = is('string', 'otherstring') // false

// compare a boolean and a boolean
result = is(true, false) // false

// compare a number and a number
result = is(42, 42) // true

// comparing two different types should give a compile-time error
// result = is(10, 'foo')  // Error TS2345: Argument of type '"foo"' is not assignabel to parameter of type 'number'

// [Hard] I shuold be able to pass any number of arguments
result = is([1], [1, 2], [1, 2, 3])


