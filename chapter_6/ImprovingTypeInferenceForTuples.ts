let a = [1, true] // number | boolean

function tuple<T extends unknown[]> (...ts: T) {
    return ts
}

let a1 = tuple(1, true)   // [number, boolean]


export {tuple}