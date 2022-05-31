// Shorthand call signature
type Log = (message: string, userId?: string) => void

// Full call signature
type Log1 = {
    (message: string, userId?: string): void
}


// Overloaded function
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
}


let reserve: Reserve = (from, to, destination) => {
    // ...
}

type Reserve1 = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

let reserve1: Reserve1 = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    // ...
}

// Wrong!
type Reserve2 = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (from: Date, toOrDestination: Date | string, 
        destination?: string): Reservation
}

let reserve: Reserve2 = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // Book a one-way trip
    } else if (typeof toOrDestination === 'string') {
        // Book a round trip
    }
}


// keeping overload signatures specific

let reserve: Reserve1 = (
    from: any,
    toOrDestination: any,
    destination?: any
) => {
    // ...
}

function getMonth(date: any): number | undefined {
    if (date instanceof Date) {
        return date.getMonth()
    }
}

function getMonth1(date: Date): number {
    return date.getDate()
}


type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
}

let createElement: CreateElement = (tag: string): HTMLElement => {
    // ...
}


function createElement1(tag: 'a'): HTMLAnchorElement
function createElement1(tag: 'canvas'): HTMLCanvasElement
function createElement1(tag: 'table'): HTMLTableElement
function createElement1(tag: string): HTMLElement {
    // ..
}


function warnUser(warning) {
    if (warnUser.wasCalled) {
        return
    }
    warnUser.wasCalled = true
    alert(warning)
}
warnUser.wasCaller = false

type WarnUser = {
    (warning: string): void
    wasCalled: boolean
}


export {}