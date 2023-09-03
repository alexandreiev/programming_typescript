// Update our `call` implementation from earlier in the chapter (“Using
// bounded polymorphism to model arity” on page 77) to only work for functions
// whose second argument is a string . For all other functions, your implementa‐
// tion should fail at compile time.


function call<T extends [unknown, string, ...unknown[]], R>(
    f: (...args: T) => R,
    ...args: T
    ): R {
        return f(...args)
    }

function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
}

function fill2(length: number, value: number): any[] {
    return Array.from({length}, () => value)
}

let a = call(fill, 10, 'a')
// let b = call(fill2, 10, 10)

export{}