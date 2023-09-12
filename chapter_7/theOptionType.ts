function ask() {
    let result = prompt('When is your birthday?')
    if (result === null) {
        return []
    }
    return [result]
}

function parse(birthday: string): Date[] {
    let date = new Date(birthday)
    if (!isValid(date)) {
        return []
    }
    return [date]
}

function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]' 
        && !Number.isNaN(date.getTime)
}

// ask()
//     .map(parse)
//     .map(date => date.toISOString())    // Error TS2551: Property 'toIsoString' does not exist on type 'Date[]'
//     .forEach(date => console.info('Date is', date))

// flattens an array of arrays into an array
function flatten<T>(array: T[][]): T[] {
    return Array.prototype.concat.apply([], array)
}


flatten(ask()
    .map(_ => parse(_)))
    .map(date => date.toISOString())
    .forEach(date => console.info('Date is', date))


interface Option<T> {
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
}

function Option<T>(value: null | undefined): None
function Option<T>(value: T): Some<T>
function Option<T>(value: T): Option<T> {
    if (value == null) {
        return new None()
    }
    return new Some(value)
}


class Some<T> implements Option<T> { 
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Some<U>): Some<U>
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
        return f(this.value)
    }
    getOrElse(): T {
        return this.value
    }   
}

class None implements Option<never> {
    flatMap(): None {
    // flatMap<U>(f: (value: never) => Option<U>): Option<U> {
        return this
    }
    getOrElse<U>(value: U): U {
        return value
    }
}


let result = Option(6)              // Some<number>
    .flatMap(n => Option(n * 3))    // Some<number>
    .flatMap(n => new None)         // None<number>
    .getOrElse(7)                   // 7


function ask2(): Option<string> {
    let result = prompt('When is your birthday?')
    return Option(result as string)
}

function parse2(birthday: string): Option<Date> {
    let date = new Date(birthday)
    if (!isValid(date)) {
        return Option(null)
    }
    return Option(date)
}

ask2()
    .flatMap(_ => parse2(_))
    .flatMap(_ => Option(new Date()))
    .flatMap(date => new Some(date.toISOString()))
    .flatMap(date => new Some('Date is ' + date))
    .getOrElse('Error parsing date for some reason')


export {}