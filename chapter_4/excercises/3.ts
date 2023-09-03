// You want the ability to book a vacation that starts immediately. Update the over‐
// loaded reserve function from earlier in this chapter (“Overloaded Function
// Types” on page 58) with a third call signature that takes just a destination,
// without an explicit start date. Update reserve ’s implementation to support this
// new overloaded signature.

type Reservation = void

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
    }

let reserve: Reserve = (
    fromOrDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
    ) => {
        if (fromOrDestination instanceof String) {
            // Book a one-way trip started from now
        } else if (toOrDestination instanceof Date && destination !== undefined) {
        // Book a one-way trip
        } else if (typeof toOrDestination === 'string') {
        // Book a round trip
        }
    }

export {}