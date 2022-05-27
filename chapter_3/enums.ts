enum Language {
    English,
    Spanish,
    Ukranian
}

enum Language1 {
    English = 0,
    Spanish = 1,
    Ukranian = 2
}

let myFirstLanguage = Language.Ukranian     // Language
let mySecondLanguage = Language['English']  // Language


enum Language2 {
    English = 0,
    Spanish = 1
}

enum Language2 {
    Ukranian = 2
}

enum Language3 {
    English = 100,
    Spanish = 200+300,
    Ukranian            // TypeScript ingers 501 (the next number after 500)
}

enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050,    // A hexadecomal literal
    White = 255,        // A decimal literal
}

let red = Color.Red     // Color
let pink = Color.Pink   // Color

let a = Color.Red       // Color
let b = Color.Green     // Error TS2339: Property 'Green' does not exist
                        // on type 'type of Color'.
let c = Color[0]        // string
let d = Color[6]        // string(!!!)

const enum Language4 {
    English,
    Spanish,
    Ukranian
}

// Accessing a valid enum key
let a1 = Language4.English  // Language
// Accessing an invalid enum key
let b1 = Language4.Tagalog  // Error TS2339: Property 'Tagalog' does not exist
                            // on type 'typeof Language4'.

// Accessing a valid enum value
let c1 = Language4[0]       // Error TS2476: A const enum member can only be
                            // accessed using a string literal.

// Accessing an invalid enum value
let d1 = Language4[6]       // Error TS2476: A const enum member can only be
                            // accessed using a string literal.


const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table
}

function flip(f: Flippable) {
    return 'flipped it'
}

flip(Flippable.Chair)   // 'flipped it'
flip(Flippable.Cup)     // 'flipped it'
flip(12)                // 'flipped it' (!!!)

const enum Flippable1 {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table'
}

function flip1(f: Flippable1) {
    return 'flipped it'
}

flip1(Flippable1.Chair) // 'flipped it'
flip1(Flippable1.Cup)   // 'flipped it'
flip1(12)               // Error TS2345: Argument of tupe '12' is not
                        // assignable to parameter of type 'Flippable1'.
flip1('Hat')            // Error TS2345: Argument of type '"Hat"' is not
                        // assignable to parameter of type 'Flippable'.


export{}