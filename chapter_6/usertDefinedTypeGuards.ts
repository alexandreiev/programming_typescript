function isString(a: unknown): boolean {
    return typeof a === 'string'
}

isString('a')   // evaluates to true
isString([7])   // evaluates to false

// function parseInput(input: string | number) {
//     let formattedInput: string
//     if (isString(input)) {
//         formattedInput = input.toUpperCase()    // Error TS2339: Property 'toUpperCase' does not exist on type 'number'.
//     }
// }

function isString2(a: unknown): a is string {
    return typeof a === 'string'
}


function parseInput(input: string | number) {
    let formattedInput: string
    if (isString2(input)) {
        formattedInput = input.toUpperCase()    // Error TS2339: Property 'toUpperCase' does not exist on type 'number'.
    }
}


type LegacyDialog = null
type Dialog = null

function isLegacyDialog(dialog: LegacyDialog | Dialog): dialog is LegacyDialog  {
    return false
}