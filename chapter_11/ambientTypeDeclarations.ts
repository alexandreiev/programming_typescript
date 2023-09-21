type ToArray<T> = T extends unknown[] ? T : T[]

function ToArray<T>(a: T): ToArray<T> | null {
    return null
}