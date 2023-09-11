type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

// let nextDay: {[K in Weekday]: Day} = {  // Error TS2739: Type '{ Mon: "Tue"; }' is missing the following properties
//     Mon: 'Tue'                          // from type '{ Mon: Day; Tue: Day; Wed: Day; Thu: Day; Fri: Day; }': Tue, Wed, Thu, Fri                          
// } 


let nextDay: {[K in Weekday]: Day} = {   
    Mon: 'Tue',                          
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Mon' 
}

type Record<K extends keyof any, T> = {
    [P in K]: T
}

type Account = {
    id: number
    isEmployee: boolean
    notes: string[]
}

// make all fields optional
type OptionalAccount = {
    [K in keyof Account]?: Account[K]
}

// make all fields nullable
type NullableAccount = {
    [K in keyof Account]: Account[K] | null
}

// make all fields read-only
type ReadOnlyAccount = {
    readonly [K in keyof Account]: Account[K]
}

// make all fields writable again (equivalent to Account)
type Account2 = {
    -readonly[K in keyof ReadOnlyAccount]: ReadOnlyAccount[K]
}

// make all fields required again (equivalent to Account)
type Account3 = {
    [K in keyof OptionalAccount]-?: OptionalAccount[K]
}




export {}