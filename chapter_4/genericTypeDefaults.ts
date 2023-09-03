type MyEvent<T = HTMLElement> = {
    target: T
    type: string
}

type MyEvent1<T extends HTMLElement> = {
    target: T
    type: string
}


// let buttonEvent1: MyEvent<HTMLButtonElement> = {
//     target: myElement,
//     type: string
// }


// Good
type Myevent2<
    Type extends string,
    Target extends HTMLElement = HTMLElement,
> = {
    targer: Target
    type: Type
} 

// Bad
// type MyEvent3<
// Target extends HTMLElement = HTMLElement,
// Type extends string     // Error TS2706: Required type parameters may
// > = {                   // not follow optional type parameters.
//     target: Target
//     type: Type
// }

export {}