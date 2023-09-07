// values
let a = 1999
function b() {}

// types
type a = number
interface b {
    (): void
}

if (a + 1 > 3) {}   // TypeScript infers from context that you mean the value a
let x: a = 3        // TypeScript infers from context that you mean the type a

class C {}
let c: C = new C

enum E {F, G}
let e: E = E.F

type State = {
    [key: string]: string
}

class StringDatabase {
    state: State = {}

    get(key: string): string | null {
        return key in this.state ? this.state[key] : null
    }

    set(key: string, value: string) : void {
        this.state[key] = value
    }

    static from(state: State) {
        let db = new StringDatabase
        for (let key in state) {
            db.set(key, state[key])
        }
        return db
    }
}

interface StringDatabase {
    state: State
    get(key: string): string | null 
    set(key: string, value: string) : void 
}

interface StringDatabaseConstructor {
    new(): StringDatabase
    FormData(state: State): StringDatabase
}



class StringDatabase2 {
    get(key: string): string | null {
        return key in this.state ? this.state[key] : null
    }

    set(key: string, value: string) : void {
        this.state[key] = value
    }

    constructor(public state: State = {}) {}
    static from(state: State) {
        let db = new StringDatabase
        for (let key in state) {
            db.set(key, state[key])
        }
        return db
    }
}

interface StringDatabaseConstructor2 {
    new(state?: State): StringDatabase
    FormData(state: State): StringDatabase
}

export {}