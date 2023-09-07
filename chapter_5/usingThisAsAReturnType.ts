class MySet {
    has(value: number): boolean {
        return false
    }

    add(value: number): this {
        return this
    } 
}

class MutableSet extends MySet {
    delete(value: number): boolean {
        return false
    }
}


let set = new MySet
set.add(1).add(2).add(3)
set.has(2)  // true
set.has(4)  // false