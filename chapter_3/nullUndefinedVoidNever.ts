// (a) A function that returns a number or null
function a(x: number) {
    if (x < 10) {
        return x
    }
    return null
}

// (b) A function that returns underfined
function b(){
    return undefined
}

// (c) A function that returns void
function c() {
    let a = 2 + 2
    let b = a * a
}

// (d) A function that returns never
function d() {
    throw TypeError('I always error')
}

// (e) Another function that returns never
function e() {
    while (true) {
        // doSomething()
    }
}

// strict null Checking
// function addDelicioysFish(pizza: Pizza) {
//     return pizza.addAnchovies() // Uncaught TypeError: Cannot read
//                                 // property 'addAnchovies' of null
// }
// // TypeScript lets this fly with strictNullChecks = false
// addDelicioysFish(null)

export{}