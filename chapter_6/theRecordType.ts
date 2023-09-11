type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

// let nextDay: Record<Weekday, Day> = {   // Error TS2739; Type '{ Mon: "Tue"; }' is missing the following properties 
//     Mon: 'Tue'                          // from type 'Record<Weekday, Day>': Tue, Wed, Thu, Fri
// }

let nextDay: Record<Weekday, Day> = {   
    Mon: 'Tue',                          
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Mon' 
}

export {}