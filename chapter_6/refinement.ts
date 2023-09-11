// We user a union of string literals to describe
// the possible values a CSS unit can have
type Unit = 'cm' | 'px' | '%'

// Enumrate the units
let units: Unit[] = ['cm', 'px', '%']

// Check each unit, and return ull if there is no match
function parseUnit(value: string): Unit | null {
    for (let i = 0; i < units.length; i++ ) {
        if (value.endsWith(units[i])) {
            return units[i]
        }
    }
    return null
}


type Width = {
    unit: Unit,
    value: number
}

function parseWidth(width: number | string | null | undefined): Width | null {
    // if width is null or underfined, return early
    if (width == null) {
        return null
    }

    // if width is a number, default to pixels
    if (typeof width === 'number') {
        return {unit: 'px', value: width}
    }

    // try to parse a unit from width
    let unit = parseUnit(width)
    if (unit) {
        return {unit, value: parseFloat(width)}
    }

    // Otherwise, return null
    return null
}



// discrimated union types

type UserTextEvent = {value: string, target: HTMLInputElement}
type UserMouseEvent = {value: [number, number], target: HTMLElement}

type UserEvent = UserTextEvent | UserMouseEvent

function handle(event: UserEvent) {
    if (typeof event.value === 'string') {
        event.value     //string
        event.target    // HTMLInputElement | HTMLElement (!!!)
        return
    }
    event.value     // [number, number]
    event.target    // HTMLInputElement | HTMLElement (!!!)
}


type UserTextEvent2 = {type: 'TextEvent', value: string, target: HTMLInputElement}
type UserMouseEvent2 = {type: 'MouseEvent', value: [number, number], target: HTMLElement}

type UserEvent2 = UserTextEvent2 | UserMouseEvent2

function handle2(event: UserEvent2) {
    if (event.type === 'TextEvent') {
        event.value     //string
        event.target    // HTMLInputElement
        return
    }
    event.value     // [number, number]
    event.target    // HTMLElement
}



export {}