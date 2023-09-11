let userId: string
// userId.toUpperCase()    // Error TS2454: Variable 'userId' is used before being assigned.

let userId2!: string

function fetchUser() {
    userId = "qwerty"
    userId2 = "qwerty"
}

fetchUser()

// userId.toUpperCase()    // Error TS2454: Variable 'userId' is used before being assigned.
userId2.toUpperCase()    // Error TS2454: Variable 'userId' is used before being assigned.


