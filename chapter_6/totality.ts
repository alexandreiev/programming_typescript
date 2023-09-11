type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

// function getNextDay(w: Weekday): Day {  // Error TS2355: A function whose declared type is neither 'undefined', 
//     switch(w) {                         // 'void', nor 'any' must return a value
//         case "Mon": 'Tue'
//         // case "Tue":
//         // case "Wed":
//         // case "Thu":
//         // case "Fri":
//     }
// }

// function isBig(n: number) {     // Error TS7030: Not all code paths return a value
//     if (n >= 100) {
//         return true
//     }
// }

let nextDay = {
    Mon: 'Tue'
}

nextDay.Mon // 'Tue'

