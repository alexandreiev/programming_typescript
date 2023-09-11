// custom error types
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function ask() {
    return prompt('When is your birthday?')
}

/**
 * 
 * @param birthday 
 * @returns 
 * @throws {InvalidDateFormatError} The user entered their birthday incorrectly.
 * @throws {DateIsInTheFutureError} The user entered a birthday in the future.
 */
function parse(birthday: string): Date {
    let date = new Date(birthday)
    if (!isValid(date)) {
        throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
    }

    if (date.getTime() > Date.now()) {
        throw new DateIsInTheFutureError('Are you a timelord?')
    }

    return date
}

function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]' 
        && !Number.isNaN(date.getTime)
}

try {
    let date = parse(ask() as string)
    console.info('Date is', date.toISOString())
} catch(e) {
    if (e instanceof InvalidDateFormatError) {
        console.error(e.message)
    } else if (e instanceof DateIsInTheFutureError) {
        console.info(e.message)
    } else {
        throw e
    }
}

export {}