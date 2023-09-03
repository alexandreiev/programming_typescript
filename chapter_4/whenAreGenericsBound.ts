type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (array, f) => [] 
    

type Filter1<T> = {
    (array: T[], f: (item: TemplateStringsArray) => boolean): T[]
}

// let filter1: Filter1 = (array, f) => []     // Error TS2314: Generic type 'Filter1'
                                            // requires 1 type argument(s).

// type Otherfilter = Filter1  // Error TS2314: Generic type 'Filter1'
                            // requires 1 type argument(s).

let filter2: Filter1<number> = (array, f) => []
type StringFilter = Filter1<String>
let stringFilter: StringFilter = (array, f) => []

export {}