// user has a single field, name
interface User {
    name: string
}

// user now has two fields, name and age
interface User {
    age: number
}

let a: User = {
    name: 'Ashley',
    age: 30
}


// type User = {       // Error TS2300: Duplicate identifier 'User'
//     name: string
// }

// type User = {       // Error TS2300: Duplicate identifier 'User'
//     name: number
// }

interface User2 {
    age: string
}

// interface User2 {   // Error TS2717: Subsequent property declarations must have
//     age: number     // the same type. Property 'age' must be of type 'string',
// }                   // but here has type 'number'.

// interface User3<Age extends number> {   // Error TS2428: All declarations of 'User'
//     age: Age                            // must have identical type parameters.
// }

interface User3<Age extends string> {
    age: Age
}

export {}