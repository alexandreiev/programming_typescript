// Implement a small typesafe assertion library `is`. Start by sketching out your types.
console.log("asdasdasf")


function is<T>(param1: T, param2: T): boolean {
    return param1 === param2;
}


let result = false
console.log("11111113")
// result = false
// // compare a string and a string
// result = is('string', 'otherstring') // false

// // compare a boolean and a boolean
// result = is(true, false) // false

// // compare a number and a number
// result = is(42, 42)

// // comparing two different types should give a compile-time error
// // result = is(10, 'foo')  // Error TS2345: Argument of type '"foo"' is not assignabel to parameter of type 'number'

// // [Hard] I shuold be able to pass any number of arguments
// // result = is([1], [1, 2], [1, 2, 3])


// export{}