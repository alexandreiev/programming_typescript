interface Animal {
    eat(food: string) : void
    sleep(hours: number): void
}

class Cat implements Animal {
    eat(food: string): void {
        console.info('Ate some', food, '. Mmm!')
    }

    sleep(hours: number): void {
        console.info('Slept for', hours, 'hours')
    }
}

interface Animal2 {
    readonly name: string
    eat(food: string) : void
    sleep(hours: number): void
}

interface Feline {
    meow(): void
}

class Cat2 implements Animal2, Feline {
    name = 'Whiskers'
    eat(food: string): void {
        console.info('Ate some', food, '. Mmm!')
    }

    sleep(hours: number): void {
        console.info('Slept for', hours, 'hours')
    }

    meow(): void {
        console.info('Meow')
    }
}

// class Cat3 implements Animal2, Feline {             // TS2420: TS Class 'Cat3' incorrectly implements interface 'Feline'.
//     name = 'Whiskers'                               //Property 'meow' is missing in type 'Cat3' but required in type 'Feline'
//     eat(food: string): void {
//         console.info('Ate some', food, '. Mmm!')
//     }

//     sleep(hours: number): void {
//         console.info('Slept for', hours, 'hours')
//     }
// }