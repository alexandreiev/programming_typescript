// Type aliases

type Age = number

type Person = {
    name: string
    age: Age
}

let age: Age = 65
let driver: Person = {
    name: 'James May',
    age: age
}

let age1 = 65
let driver1: Person = {
    name: 'James May',
    age: age
}

type Color = 'red'
type Color = 'blue' // Error TS 2300: Duplicate identifier 'Color'.

type Color1 = 'red'
let x = Math.random() < .5

if (x) {
    type Color1 = 'blue'    // This shadows the Color declared above
    let b: Color1 = 'blue'
} else {
    let c: Color = 'red'
}

// Union and intersection types
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}

// Dog
a = {
    name: 'Domino',
    barks: true,
    wags: true
}

// Both
a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}


let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
}

function trueOrNull(isTrue: boolean) {
    if (isTrue) {
        return 'true'
    }
    return null
}

type Returns = string | null
function a1(a: string, b: number) {
    return a || b
}

export{}