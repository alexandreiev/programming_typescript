type ClassConstructor = new(...args: any[]) => {}

function withEZDebug<C extends ClassConstructor>(Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args)
        }
    }
}

type ClassConstructor1<T> = new(...args: any[]) => T
function withEZDebug1<C extends ClassConstructor1<{getDebugValue(): Object}>> (Class: C) {
    return class extends Class {
        debug() {
            let Name = Class.constructor.name
            let value = this.getDebugValue()
            return Name + '(' + JSON.stringify(value) + ')'
        }
    }
}

class HardToDebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}

    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        }
    }
}

let User = withEZDebug1(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
console.info(user.debug())    // evaluetes to 'User({"id": 3, "name": "Emma Gluzman"})'
