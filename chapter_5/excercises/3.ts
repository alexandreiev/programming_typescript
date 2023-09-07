// Extend the implementation we developed “Factory Pattern” on page 108 to make
// it safer, at the expense of breaking the abstraction a bit. Update the implementa‐
// tion so that a consumer knows at compile time that calling Shoe.cre
// ate('boot') returns a Boot and calling Shoe.create('balletFlat') returns a
// BalletFlat (rather than both returning a Shoe ).

type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing';
}

class Boot implements Shoe {
    purpose = 'woodcutting';
}

class Sneaker implements Shoe {
    purpose = 'wanking';
}

type ShoeFunc = {
    create(type: 'balletFlat'): BalletFlat
    create(type: 'boot'): Boot
    create(type: 'sneaker'): Sneaker

}
let Shoe: ShoeFunc = {
    create(type: 'balletFlat' | 'boot' | 'sneaker') : Shoe {
        switch (type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case "sneaker": return new Sneaker
        }
    }
}

let boot = Shoe.create("boot")

export {}