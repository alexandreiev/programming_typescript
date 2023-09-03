function sum(a: number, b: number): number {
    return a + b
}

// typr level and value level code
function area(radius: number): number | null {
    if (radius < 0) {
        return null
    }
    return Math.PI * (radius ** 2)
}

let r: number = 3
let a = area(r)
if (a != null) {
    console.info('result:', a)
}

// function greet(name: string)
type Greet = (name: string) => string

// function log(message: string, userId?: string)
type Log = (message: string, userId: string) => void

// function sumVariadicSage(...numbers: number[]): number
type SumVariadicSafe = (...numers: number[]) => number

let log: Log = (
    message,
    userId = 'Not signed in'
) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

export {}