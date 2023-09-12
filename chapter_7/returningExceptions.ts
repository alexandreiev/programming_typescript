class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function ask() {
    return prompt('When is your birthday?')
}

function parse(birthday: string): Date |InvalidDateFormatError | DateIsInTheFutureError {
    let date = new Date(birthday)
    if (!isValid(date)) {
        return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
    }

    if (date.getTime() > Date.now()) {
        return new DateIsInTheFutureError('Are you a timelord?')
    }

    return date
}

function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]' 
        && !Number.isNaN(date.getTime)
}

let result = parse(ask() as string) // either a date or an error
if (result instanceof InvalidDateFormatError) {
    console.error(result.message)
} else if (result instanceof DateIsInTheFutureError) {
    console.info(result.message)
} else {
    console.info('Date is', result.toISOString())
}


// lazy
let result2 = parse(ask() as string) // either a date or an error
if (result2 instanceof Error) {
    console.error(result2.message)
} else {
    console.info('Date is', result2.toISOString())
}

class Error1 {}
class Error2 {}
class Error3 {}
function x<T>(): T | Error1 {
    return new Error1()
}
function y<U>(): U |Error1 | Error2 {
    let a = x()
    if (a instanceof Error) {
        return a
    }
    return new Error2
}
function z<U>(): U | Error1 | Error2 | Error3 {
    let a = y()
    if (a instanceof Error) {
        return a
    }
    return Error3
}

export {}