namespace Flowers {
    export function give(count: number) {
        return count + ' flowers'
    }
}

// compiled to 

// let Flowers 
// (function (Flowers) {
//     function give(count) {
//         return count + ' flowers'
//     }
//     Flowers.give = give
// }) (Flowers || (Flowers = {}))