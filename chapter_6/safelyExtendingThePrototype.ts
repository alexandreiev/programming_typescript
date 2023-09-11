import './zip.js'

let arr = [1, 2, 3]
    .map(n => n * 2)        // number[]
    .zip(['a', 'b', 'c'])   // [number, string][]

arr = []