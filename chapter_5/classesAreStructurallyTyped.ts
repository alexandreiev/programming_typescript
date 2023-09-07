class Zebra {
    trot() {}
}

class Poodle {
    trot() {}
}

function ambleAround(animal: Zebra) {
    animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle)

class A {
    private x = 1
}
class B extends A {}
function f(a: A) {}
f(new A)
f(new B)

// f({x: 1})   // Error TS2345: Argument of type '{ x: number; }' is not assignable to parameter of type 'A'.
//             // Property 'x' is private in type 'A' but not in type '{ x: number; }'
