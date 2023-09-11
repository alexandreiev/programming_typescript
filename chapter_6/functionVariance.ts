class Animal {}
class Bird extends Animal {
    chirp() {}
}
class Crow extends Bird {
    caw() {}
}

function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
}

// chirp(new Animal)   // Error TS2345: Argument of type 'Animal' is not assignable to parameter of type 'Bird'
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {
    let parent = new Bird
    let babyBird = f(parent)
    babyBird.chirp()
}

function birdToBird(b: Bird): Bird {
    return new Bird
}

clone(birdToBird)

function birdToCrow(d: Bird) : Crow {
    return new Crow
}
clone(birdToBird)

function birdToAnimal(d: Bird): Animal {
    return new Animal
}
// clone(birdToAnimal) // Error TS2345: Argument of type '(d: Bird) => Animal' is not assignable 
                    // to parameter of type '(b: Bird) => Bird'.
                    // Property 'chirp' is missing in type 'Animal' but required in type 'Bird'.


function animalToBird(a: Animal): Bird {
    return new Bird
}
clone(animalToBird)

function crowToBird(c: Crow): Bird {
    c.caw()
    return new Bird
}
// clone(crowToBird)   // Argument of type '(c: Crow) => Bird' is not assignable to parameter of type '(b: Bird) => Bird'.
                    // Types of parameters 'c' and 'b' are incompatible.
                    // Property 'caw' is missing in type 'Bird' but required in type 'Crow'.


