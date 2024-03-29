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

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker') : Shoe {
        switch (type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case "sneaker": return new Sneaker
        }
    }
}