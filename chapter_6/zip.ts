
// import { tuple } from "./ImprovingTypeInferenceForTuples"


// tell TypeSriipt about .zip

// for the script mode
// interface Array<T> {
//     zip<U>(list: U[]): [T, U][]
// }

// for the module mode
declare global {
    interface Array<T> {
    zip<U>(list: U[]): [T, U][]
    }
}


// implement .zip
Array.prototype.zip = function<T, U> (this: T[], list: U[]): [T, U][] {
    return this.map((v, k) => [v, list[k]])
    // return this.map((v, k) => tuple(v, list[k]))
}

export {}

