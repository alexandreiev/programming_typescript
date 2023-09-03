type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}
let filter: Filter = (array, _) => []


type Filter1<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}
let filter1: Filter1<number> = (array, _) => []


type Filter2 = <T>(array: T[], f: (item: T) => boolean) => T[]
let filter2: Filter2 = (array, _) => []


type Filter3<T> = (array: T[], f: (item: T) => boolean) => T[]
let filter3: Filter3<string> = (array, _) => []


function filter4<T>(array: T[], f: (item: T) => boolean): T[] {
    return []
}


function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i])
    }
    return result
}

function map1<T, U>(array: T[], f: (item: T) => U): U[] {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i])
    }
    return result
}

export {}