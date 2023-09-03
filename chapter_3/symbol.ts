let a = Symbol('a')                     // symbol
let b: symbol = Symbol('b')             // symbol
var c = a == b                          // boolean
// let d = a + 'x'                         // Error TS2469: The '+' operator cannot be applied
                                        // to type 'symbol'.
const e = Symbol('e')                   // type of e
const f: unique symbol = Symbol('f')    // type of f
// let g: unique symbol = Symbol('f')      // Error TS 1332: A variable whose type is a
                                        // 'unique symbol' type must be 'const'
let h = e == e                          // boolean
// let i = e == f                          // Error T2367: This condition will always return
                                        // 'false' since the types 'unique symbol' and
                                        // 'unique symbol' have no overlap.

export{}