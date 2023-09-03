
// javascript implementation
// function filter(array, f) {
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//         let item = array[i]
//         if (f(item)) {
//             result.push(item)
//         }
//     }
//     return result
// }

// filter([1, 2, 3, 4], _ => _ < 3)    // evaluates to [1,2]


type Filter = {
    (array: number[], f: (item: number) => boolean): number[],
    (array: string[], f: (item: string) => boolean): string[],
    (array: object[], f: (item: object) => boolean): object[]
}

let filter: Filter = array => {
    return []
}

let names = [
    {firstName: 'beth'},
    {firstName: 'caitlyn'},
    {firstName: 'xin'}
]

// let result = filter(
//     names,
//     _ => _.firstName.startWith('b')     // Error TS2339: Property 'firstName' does not exist on type 'object'.
// )

// result[0].firstName // Error TS2339: Property 'firstName' does not exist 
                    // on type 'object'.


type Filter1 = {
   <T> (array: T[], f: (item: T) => boolean): T[]
}
                
let filter1: Filter1 = (array, f) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (f(item)) {
             result.push(item)
        }
    }
    return result
}

// (a) T is bound to number
filter1([1, 2, 3], _ => _ > 2)

// (a) T is bound to number
filter1(['a', 'b'], _ => _ !== 'b')

// (c) T is bound to {firstName: string}
filter1(names, _ => _.firstName.startsWith('b'))

export {}