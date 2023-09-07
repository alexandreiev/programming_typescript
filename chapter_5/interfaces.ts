import { type } from "os"

type Sushi = {
    calories: number
    salty: boolean
    tasty: boolean
}

type Cake = {
    calories: number
    sweet: boolean
    tasty: boolean
}

type Food = {
    calories: number
    tasty: boolean
}
type Sushi2 = Food & {
    salty: boolean
}
type Cake2 = Food & {
    sweet: boolean
}

interface ISushi {
    calories: number
    salty: boolean
    tasty: boolean
}

interface IFood {
    calories: number
    tasty: boolean
}
interface ISushi2 extends Food {
    salty: boolean
}
interface ICake2 extends Food {
    sweet: boolean
}

type A = number
type B = A | string

interface IA {
    good(x: number): string
    bad(x: number): string
}

// interface IB extends IA {               // Error TS2430: Interface 'IB' incorrectly extends
//     good(x: string | number): string     // interface 'A'. Type 'number' is not assignable
//     bad(x: string): string              // to type 'string'
// }


type A2 = {
    good(x: number): string
    bad(x: number): string
}

type B2 = A2 & {               
    good(x: string| number): string     
    bad(x: string): string              
}
