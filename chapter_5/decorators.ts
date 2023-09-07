type Payload = {}

type ClassConstructor<T> = new(...args: any[]) => T

function serializable<T extends ClassConstructor<{getValue(): Payload}>>(Constructor: T) {
    return class extends Constructor {
        serialize() {
            return this.getValue().toString()
        }
    }
}

@serializable
class APIPayload {
    getValue(): Payload {
        return {}
    }
}

let payload = new APIPayload
// let serialized = payload.serialize()    // Error TS2339: Property 'serialize' does not exist on type 'APIPayload'.


let APIPayload1 = serializable(class {
    getValue(): Payload {
        return {}
    }
})


let DecoratedAPIPayload = serializable(APIPayload1)
let payload1 = new DecoratedAPIPayload
payload1.serialize()


export {}