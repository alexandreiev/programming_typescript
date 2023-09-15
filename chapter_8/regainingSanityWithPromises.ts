import { appendFile, readFile } from "fs"

// callback-based API
function appendAndRead(
    path: string, 
    data: string, 
    cb: (error: Error | null, result: string | null) => void
) {
    appendFile(path, data, error => {
        if (error) {
            return cb(error, null)
        }
        readFile(path, (error, result) => {
            if (error) {
                return cb(error, null)
            }
            cb(null, result.toString('utf-8'))
        })
    })
} 

// function appendAndReadPromise(path: string, data: string) : MyPromise2<string> {
//     return appendPromise(path, data)
//         .then(() => appendAndReadPromise(path))
//         .catch(error => console.error(error))
// }


type Executor<T, E extends Error> = (
    resolve: (result: T) => void,
    reject: (error: E) => void
) => void

// class MyPromise<T, E extends Error> {
//     constructor(f: Executor<T, E>) {}
//     then<U, F extends Error>(g: (result: T) => MyPromise<U, F>): MyPromise<U, F> 
//     catch<U, F extends Error>(g: (error: E) => MyPromise<U, F>): MyPromise<U, F>
// }

// function readFilePromise(path: string): MyPromise2<string> {
//     return new MyPromise2((resolve, rejects) => {
//         readFile(path, (error, result) => {
//             if (error) {
//                 rejects(error)
//             } else {
//                 resolve(result.toString('utf-8'))
//             }
//         } )
//     })
// }


// let a: () => MyPromise<string, TypeError> = () => new MyPromise(
//     (
//         resolve = (resolve) => {}, 
//         reject = (reject) => {}
//     ) => {}
// ) 


// let b: (s: string) => MyPromise<number, never> = (s) => new MyPromise(
//     (
//         resolve = (resolve) => {}, 
//         reject = (reject) => {}
//     ) => {}
// )

// let c: () => MyPromise<boolean, RangeError> = () => new MyPromise(
//     (
//         resolve = (resolve) => {}, 
//         reject = (reject) => {}
//     ) => {}
// ) 


// a()
//     .then(b)
//     .catch(e => c())    // b won't error, so this is if a errors
//     // .then(result => console.info('Done', result))
//     // .catch(e => console.error('Error', e))





type Executor2<T> = (
    resolve: (result: T) => void,
    reject: (error: unknown) => void
) => void

// class MyPromise2<T> {
//     constructor(f: Executor2<T>) {}
//     then<U>(g: (result: T) => MyPromise2<U>): MyPromise2<U> {}
//     catch<U>(g: (error: unknown) => MyPromise2<U>): MyPromise2<U>  {}
// }
