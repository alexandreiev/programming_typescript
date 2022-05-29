function add(a: number, b: number): number {
    return a + b
}
add(10, 20)                 // evaluates to 30
add.apply(null, [10, 20])   // evaluates to 30
add.call(null, 10, 20)      // evaluates to 30
add.bind(null, 10, 20)()    // evaluates to 30

export {}